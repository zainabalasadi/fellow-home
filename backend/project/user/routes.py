# backend/project/users/routes.py

import os

from flask import Blueprint, Flask, request
from flask_praetorian import auth_required, current_user
from flask_restful import Api, Resource

from project import db
from project.user.models import User
from project.user.schemas import UserSchema
from project.listing.models import Listing
from project.listing.schemas import ListingSchema
from project.review.models import Review
from project.review.schemas import ReviewSchema

bp = Blueprint('user', __name__)
api = Api(bp)

class UserListResource(Resource):
    def get(self):
        page = request.args.get('page', 1, type=int)
        users = User.query.paginate(page, int(os.getenv('PER_PAGE', 10)), False).items

        if not users:
            return {'status': 'error',
                    'error': 'No users found'}, 404

        return {'status': 'success',
                'data': UserSchema(exclude=['password']).dump(users, many=True).data}

class UserSettingsResource(Resource):
    @auth_required
    def get(self):
        user = current_user()

        return {'status': 'success',
                'data': UserSchema(exclude=(['password'])).dump(user).data}

    @auth_required
    def put(self):
        user = current_user()
        data, _ = UserSchema().load(request.get_json(), 
                                    instance=User.lookup(user.email), 
                                    partial=True)
        db.session.commit()
        return {'status': 'success',
                'msg': f'User {id} successfully updated'}

class UserResource(Resource):
    def get(self, id):
        user = User.query.get(id)
        if user is None:
            return {'status': 'error',
                    'error': 'User not found'}, 404

        return {'status': 'success',
                'data': UserSchema(exclude=['password']).dump(user).data}

class UserListingResource(Resource):
    def get(self, id):
        listings = Listing.query.filter(Listing.published).filter(Listing.user_id == id).all()

        if not listings:
            return {'status': 'error',
                    'error': 'No listings found'}, 404

        return {'status': 'success',
                'data': ListingSchema().dump(listings, many=True).data}

class UserReviewsResource(Resource):
    def get(self, id):
        reviewee = User.query.get(1)
        
        if not reviewee:
            return {'status': 'error',
                    'error': 'User not found'}, 404

        reviews = Review.query.filter(Review.reviewee_id == id).all()

        if not reviews:
            return {'status': 'error',
                    'error': 'No reviews found'}, 404

        return {'status': 'success',
                'data': ReviewSchema().dump(reviews, many=True).data}

    @auth_required
    def post(self, id):
        user = current_user()
        reviewee = User.query.get(id)
        
        if not reviewee:
            return {'status': 'error',
                    'error': 'User not found'}, 404

        try:
            data, _ = ReviewSchema().load(request.get_json())
            user.add_review(reviewee, data)
        except Exception as err:
            print(err)
            return {'status': 'error',
                    'error': 'an error occurred'}, 404

        return {'status': 'success',
                'msg': f'Successfully reviewed {id}'}

api.add_resource(UserListResource, '/')
api.add_resource(UserSettingsResource, '/settings')
api.add_resource(UserResource, '/<int:id>')
api.add_resource(UserListingResource, '/<int:id>/listings')
api.add_resource(UserReviewsResource, '/<int:id>/reviews')
