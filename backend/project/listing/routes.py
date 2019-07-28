# backend/project/listing/routes.py

import os

from flask import Blueprint, Flask, request
from flask_praetorian import auth_required, current_user
from flask_restful import Api, Resource
from marshmallow import ValidationError

from project import db, guard
from project.listing.models import Listing, Address
from project.listing.schemas import ListingSchema 

bp = Blueprint('listing', __name__)
api = Api(bp)

class ListingListResource(Resource):
    def get(self):
        search_string = request.args.get('search', '')
        page = request.args.get('page', 1, type=int)

        # search by suburbs
        listings = Listing.query.join(Address).filter(Listing.published).\
                        filter(Address.suburb.ilike(f'%{search_string}%')).\
                        paginate(page, int(os.getenv('PER_PAGE', 10)), False).items
        if not listings:
            return {'status': 'error',
                    'error': 'No listings found'}, 404

        return {'status': 'success',
                'data': ListingSchema().dump(listings, many=True).data}

    @auth_required
    def post(self):
        user = current_user()
        try:
            listing, _ = ListingSchema().load(request.get_json())
            id = user.add_listing(listing)
        except ValidationError as err:
            return {'status': 'error', 'errors': err.messages['_schema']}

        return {'status': 'success', 'msg': f'successfully created listing {id}'}

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

api.add_resource(ListingListResource, '/')
api.add_resource(ListingResource, '/<int:id>')
api.add_resource(ListingPublishResource, '/<int:id>/publish')
