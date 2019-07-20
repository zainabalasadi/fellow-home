# backend/project/auth/routes.py

from flask import Blueprint, Flask, jsonify, request
from flask_praetorian import auth_required
from flask_restful import Api, Resource

from project import guard
from project.auth.models import TokenBlacklist
from project.user.models import User
from project.auth.errors import SignUpError

bp = Blueprint('auth', __name__)
api = Api(bp)

class Login(Resource):
    def post(self):
        req = request.get_json()
        email = req.get("email", None)
        password = req.get("password", None)

        user = guard.authenticate(email, password)
        return {'access_token': guard.encode_jwt_token(user)}

class FacebookLogin(Resource):
    def post(self):
        return {'msg': 'not implemented'}

class GoogleLogin(Resource):
    def post(self):
        return {'msg': 'not implemented'}

class RefreshToken(Resource):
    def get(self):
        old_token = guard.read_token_from_header()
        new_token = guard.refresh_jwt_token(old_token)
        return {'access_token': new_token}

class Register(Resource):
    def post(self):
        req = request.get_json()
        f_name = req['first_name']
        l_name = req['last_name']
        email = req['email']
        dob = req['dob']
        password = guard.encrypt_password(req['password'])
        try:
            if (email == ""):
                raise SignUpError("Please provide an email")
            elif ("@" not in email):
                raise SignUpError("Please provide a valid email")
            elif(password == ""):
                raise SignUpError("Please provide a password")
            elif(len(password) < 6):
                raise SignUpError("Please provide a password of minimum 6 characters")
            elif(f_name == ""):
                raise SignUpError("Please provide a first name")
            elif(l_name == ""):
                raise SignUpError("Please provide a last name")
        except SignUpError as error:
            return error.message

        if User.lookup(email):
            return {'status': 'error', 'msg': 'user already exists'}

        User.add(f_name=f_name, l_name=l_name, email=email, password=password, dob=dob)
        return {'status': 'success', 'msg': 'successfully created user'}

class Logout(Resource):
    @auth_required
    def post(self):
        req = request.get_json()
        data = guard.extract_jwt_token(req['token'])
        TokenBlacklist.add(token=data['jti'])
        return {'status': 'success', 'msg':'token blacklisted'}

api.add_resource(Login, '/login')
api.add_resource(FacebookLogin, '/facebook_login')
api.add_resource(GoogleLogin, '/google_login')
api.add_resource(RefreshToken, '/refresh')
api.add_resource(Register, '/register')
api.add_resource(Logout, '/logout')
