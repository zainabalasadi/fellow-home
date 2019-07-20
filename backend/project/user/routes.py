# backend/project/users/routes.py

from flask import Blueprint, Flask, jsonify, request
from flask_praetorian import auth_required
from flask_restful import Api, Resource

from project.user.models import User
from project.user.schemas import UserSchema

bp = Blueprint('user', __name__)
api = Api(bp)

class UserListResource(Resource):
    def get(self):
        users = User.query.all()
        return {'status': 'success',
                'data': [UserSchema().dump(user).data for user in users]}

class UserResource(Resource):
    def get(self, id):
        user = User.query.get(id)
        return {'status': 'success',
                'data': UserSchema().dump(user).data}

api.add_resource(UserListResource, '/')
api.add_resource(UserResource, '/<int:id>')
