# backend/project/users/routes.py

import os

from flask import Blueprint, Flask, request
from flask_praetorian import auth_required, current_user
from flask_restful import Api, Resource

from project import db
from project.user.models import User
from project.user.schemas import UserSchema

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
                'data': [UserSchema(exclude=['password']).dump(user).data for user in users]}

class UserResource(Resource):
    def get(self, id):
        user = User.query.get(id)
        if user is None:
            return {'status': 'error',
                    'error': 'User not found'}, 404

        return {'status': 'success',
                'data': UserSchema(exclude=['password']).dump(user).data}

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
        return {'status': 'success'}


api.add_resource(UserListResource, '/')
api.add_resource(UserResource, '/<int:id>')
api.add_resource(UserSettingsResource, '/settings')
