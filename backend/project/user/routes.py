# backend/project/users/routes.py

import os

from flask import Blueprint, Flask, request
from flask_praetorian import auth_required
from flask_restful import Api, Resource

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
                    'error': 'Page not found'}, 404

        return {'status': 'success',
                'data': [UserSchema(exclude='password').dump(user).data for user in users]}

class UserResource(Resource):
    def get(self, id):
        user = User.query.get(id)
        if user is None:
            return {'status': 'error',
                    'error': 'User not found'}, 404

        return {'status': 'success',
                'data': UserSchema(exclude='password').dump(user).data}

api.add_resource(UserListResource, '/')
api.add_resource(UserResource, '/<int:id>')
