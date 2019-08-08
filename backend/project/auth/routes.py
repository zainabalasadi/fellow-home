# backend/project/auth/routes.py

from flask import Blueprint, Flask, request
from flask_praetorian import auth_required
from flask_restful import Api, Resource
from marshmallow import ValidationError

from project import guard
from project.auth.models import TokenBlacklist
from project.user.models import User
from project.user.schemas import UserSchema

bp = Blueprint('auth', __name__)
api = Api(bp)


class LoginResource(Resource):
    def post(self):
        req = request.get_json()
        email = req.get("email", None)
        password = req.get("password", None)

        user = guard.authenticate(email, password)
        # use this when refreshing tokens automatically is added
        # return {'access_token': guard.encode_jwt_token(user)}
        return {'access_token': guard.encode_eternal_jwt_token(user),
                'user': UserSchema(exclude=['password']).dump(user).data}


class FacebookLoginResource(Resource):
    def post(self):
        return {'msg': 'not implemented'}


class GoogleLoginResource(Resource):
    def post(self):
        return {'msg': 'not implemented'}


class RefreshTokenResource(Resource):
    def get(self):
        old_token = guard.read_token_from_header()
        new_token = guard.refresh_jwt_token(old_token)
        return {'access_token': new_token}


class RegisterResource(Resource):
    def post(self):
        try:
            data, _ = UserSchema().load(request.get_json())
            id = User.add(data)
        except ValidationError as err:
            return {'status': 'error', 'errors': err.messages['_schema']}, 403

        return {'status': 'success', 'msg': f'successfully created user {id}'}


class LogoutResource(Resource):
    @auth_required
    def post(self):
        req = request.get_json()
        data = guard.extract_jwt_token(req['token'])
        TokenBlacklist.add(token=data['jti'])
        return {'status': 'success', 'msg': 'token blacklisted'}


api.add_resource(LoginResource, '/login')
api.add_resource(FacebookLoginResource, '/facebook_login')
api.add_resource(GoogleLoginResource, '/google_login')
api.add_resource(RefreshTokenResource, '/refresh')
api.add_resource(RegisterResource, '/register')
api.add_resource(LogoutResource, '/logout')
