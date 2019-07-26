# backend/project/listing/routes.py

import os

from flask import Blueprint, Flask, request
from flask_praetorian import auth_required, current_user
from flask_restful import Api, Resource
from marshmallow import ValidationError

from project.listing.models import Listing
from project.listing.schemas import (ListingSchema, 
                                    FeatureSchema, 
                                    AmenitySchema, 
                                    RestrictionSchema,
                                    RoomSchema, 
                                    AddressSchema)

bp = Blueprint('listing', __name__)
api = Api(bp)

class ListingListResource(Resource):
    def get(self):
        page = request.args.get('page', 1, type=int)
        listings = Listing.query.paginate(page, int(os.getenv('PER_PAGE', 10)), False).items
        if not listings:
            return {'status': 'error',
                    'error': 'Page not found'}, 404

        return {'status': 'success',
                'data': [ListingSchema().dump(listing).data for listing in listings]}

    @auth_required
    def post(self):
        user = current_user()
        try:
            listing, _ = ListingSchema().load(request.get_json())
            id = Listing.add(user, listing)
        except ValidationError as err:
            return {'status': 'error', 'errors': err.messages['_schema']}

        return {'status': 'success', 'msg': f'successfully created listing {id}'}

class ListingResource(Resource):
    def get(self, id):
        listing = Listing.query.get(id)
        if listing is None:
            return {'status': 'error',
                    'error': 'Listing not found'}, 404

        return {'status': 'success',
                'data': ListingSchema().dump(listing).data}

api.add_resource(ListingListResource, '/')
api.add_resource(ListingResource, '/<int:id>')
