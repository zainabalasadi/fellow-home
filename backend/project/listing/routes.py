# backend/project/listing/routes.py

import json
import os

from flask import Blueprint, Flask, request
from flask_praetorian import auth_required, current_user
from flask_restful import Api, Resource
from marshmallow import ValidationError

from project import db, guard
from project.listing.models import Listing, Address, Room, Preference
from project.listing.schemas import ListingSchema
from project.review.models import Review
from project.review.schemas import ReviewSchema

bp = Blueprint('listing', __name__)
api = Api(bp)

filters = {
        'room_type': {
            'sharedRoom': 'Room shared with others',
            'privateRoom': 'Private room'
            },
        'property_type': {
            'house': 'homestay',
            'guesthouse': 'guest-house',
            'apartment': 'apartment',
            'townhouse': 'townhouse'
            },
        'preferences': {
            'smoking': 'Smokers accepted',
            'pets': 'Pets considered',
            'children': 'Children considered',
            'female': 'All female flat'
            }
}

class ListingListResource(Resource):
    def get(self):
        search_string = request.args.get('search', '')
        page = request.args.get('page', 1, type=int)
        filters_checkboxes = request.args.get('filtersCheckBoxes', '')
        filters_values = request.args.get('filtersValues', '')

        listing_filter = {
                'room_type': [], 
                'property_type': [], 
                'preferences': [],
                'min_rent': 0,
                'max_rent': 0,
                'num_bedrooms': 0,
                'num_bathrooms': 0}

        if filters_checkboxes:
            filters_checkboxes = json.loads(filters_checkboxes)
            for fil, val in filters_checkboxes.items():
                if not val:
                    continue
                for filter in filters:
                    if fil in filters[filter]:
                        listing_filter[filter].append(filters[filter][fil])
        if filters_values:
            filters_values = json.loads(filters_values)
            listing_filter['min_rent'] = filters_values['minPrice']
            listing_filter['max_rent'] = filters_values['maxPrice']
            listing_filter['num_bedrooms'] = filters_values['bedroom']
            listing_filter['num_bathrooms'] = filters_values['bathroom']

        listings = []
        # search by suburbs
        suburb_query = Listing.query.join(Address).join(Room).filter(Listing.published). \
            filter(Address.suburb.ilike(f'%{search_string}%')).distinct().\
            order_by(Listing.date_published.desc())

        # search by city
        city_query = Listing.query.join(Address).join(Room).filter(Listing.published). \
            filter(Address.city.ilike(f'%{search_string}%')).distinct().\
            order_by(Listing.date_published.desc())

        queries = [suburb_query, city_query]
        for idx, query in enumerate(queries):
            if listing_filter['room_type']:
                query = query.filter(Room.roomType.in_(listing_filter['room_type']))
            if listing_filter['property_type']:
                query = query.filter(Listing.property_type.in_(listing_filter['property_type']))
            if listing_filter['preferences']:
                query = query.join(Preference)\
                        .filter(Preference.preference.in_(listing_filter['preferences']))
            if listing_filter['num_bedrooms']:
                query = query.filter(Listing.num_bedrooms >= listing_filter['num_bedrooms'])
            if listing_filter['num_bathrooms']:
                query = query.filter(Listing.num_bathrooms >= listing_filter['num_bathrooms'])
            if listing_filter['min_rent']:
                query = query.filter(Room.cost >= listing_filter['min_rent'])
            if listing_filter['max_rent']:
                query = query.filter(Room.cost <= listing_filter['max_rent'])

            query = query.paginate(page, int(os.getenv('PER_PAGE', 12)), False)
            queries[idx] = query

        suburb_query, city_query = queries
        total = suburb_query.total + city_query.total # 1 of them should be 0
        if suburb_query.total and city_query.total:
            # if both of them have values only return suburb query total
            # since some addresses have no city
            total = suburb_query.total

        if suburb_query.items:
            listings.extend(suburb_query.items)
        elif city_query.items:
            listings.extend(city_query.items)

        # per page
        total = int(total / int(os.getenv('PER_PAGE', 12)))

        if not listings:
            return {'status': 'error',
                    'error': 'No listings found'}, 400

        return {'status': 'success',
                'data': ListingSchema().dump(listings, many=True).data,
                'total': total}

    @auth_required
    def post(self):
        user = current_user()
        try:
            listing, _ = ListingSchema().load(request.get_json())
            id = user.add_listing(listing)
        except ValidationError as err:
            print(err)
            return {'status': 'error', 'errors': err.messages['_schema']}

        return {'status': 'success', 'msg': f'successfully created listing {id}', 'id': id}


class ListingResource(Resource):
    def get(self, id):
        user_id = -1

        # make sure only the user who created a private listing can access that listing
        if 'Authorization' in request.headers:
            token = guard.read_token_from_header()
            user_id = guard.extract_jwt_token(token)["id"]

        listing = Listing.query.get(id)

        if listing is None:
            return {'status': 'error',
                    'error': 'Listing not found'}, 404

        if not listing.published and listing.user_id != user_id:
            return {'status': 'error',
                    'error': 'Listing is private'}, 403

        return {'status': 'success',
                'data': ListingSchema().dump(listing).data}

    @auth_required
    def put(self, id):
        user = current_user()
        listing = Listing.query.get(id)
        if listing is None:
            return {'status': 'error',
                    'error': 'Listing not found'}, 404

        if listing.user_id != user.id:
            return {'status': 'error',
                    'error': 'Cannot update listing that you do not own'}, 403
        try:
            data, _ = ListingSchema().load(request.get_json(),
                                           instance=Listing.query.get(id),
                                           partial=True)
            db.session.commit()
        except ValidationError as err:
            return {'status': 'error', 'errors': err.messages['_schema']}

        return {'status': 'success',
                'msg': f'Listing {id} successfully updated'}

    @auth_required
    def delete(self, id):
        user = current_user()
        listing = Listing.query.get(id)
        if listing is None:
            return {'status': 'error',
                    'error': 'Listing not found'}, 404

        if listing.user_id != user.id:
            return {'status': 'error',
                    'error': 'Cannot delete listing that you do not own'}, 403

        Listing.remove(listing)

        return {'status': 'success',
                'msg': f'Listing {id} successfully removed'}


class ListingPublishResource(Resource):
    @auth_required
    def put(self, id):
        user = current_user()
        listing = Listing.query.get(id)

        if listing.user_id != user.id:
            return {'status': 'error',
                    'msg': 'You do not have access to this listing'}, 403
        data, _ = ListingSchema().load({'published': True},
                                       instance=Listing.query.get(id),
                                       partial=True)
        db.session.commit()

        return {'status': 'success',
                'msg': f'Listing {id} successfully published'}

class ListingReviewsResource(Resource):
    def get(self, id):
        listing = Listing.query.get(id)

        if not listing:
            return {'status': 'error',
                    'error': 'Listing not found'}, 404

        reviews = Review.query.filter(Review.listing_id == id).order_by(Review.created_at.desc()).all()

        if not reviews:
            return {'status': 'error',
                    'error': 'No reviews found'}, 404

        return {'status': 'success',
                'data': ReviewSchema().dump(reviews, many=True).data}

    @auth_required
    def post(self, id):
        user = current_user()
        listing = Listing.query.get(id)

        if not listing:
            return {'status': 'error',
                    'error': 'Listing not found'}, 404

        try:
            data, _ = ReviewSchema().load(request.get_json())
            listing.add_review(user, data)
        except Exception as err:
            return {'status': 'error',
                    'error': 'an error occurred'}, 404

        return {'status': 'success',
                'msg': f'Successfully reviewed {id}'}

api.add_resource(ListingListResource, '/')
api.add_resource(ListingResource, '/<int:id>')
api.add_resource(ListingPublishResource, '/<int:id>/publish')
api.add_resource(ListingReviewsResource, '/<int:id>/reviews')
