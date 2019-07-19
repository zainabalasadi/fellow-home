# backend/project/controllers/routes.py

from flask import Blueprint, Flask, jsonify, request
from flask_praetorian import auth_required

from project import guard
from project.auth.models import User, TokenBlacklist
from project.auth.errors import SignUpError

bp = Blueprint('auth', __name__)

@bp.route('/login',methods=['GET','POST'])
def login():
    if request.method == "POST":
        req = request.get_json()
        email = req.get("email", None)
        password = req.get("password", None)

        user = guard.authenticate(email, password)
        return jsonify(access_token=guard.encode_jwt_token(user)), 200

@bp.route('/facebook_login', methods=['POST'])
def facebook_login():
    # get access token from frontend
    # verify access token on backend
    # send back a jwt access token
    return jsonify(msg='not implemented yet'), 200

@bp.route('/google_login', methods=['POST'])
def google_login():
    # same idea as facebook login
    return jsonify(msg='not implemented yet'), 200

@bp.route('/refresh')
def refresh():
    old_token = guard.read_token_from_header()
    new_token = guard.refresh_jwt_token(old_token)
    return jsonify(access_token=new_token), 200

@bp.route('/register', methods=['GET','POST'])
def register():
    if request.method == "POST":
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
            return jsonify(status='failure', msg='user already exists'), 200

        User.add(f_name=f_name, l_name=l_name, email=email, password=password, dob=dob)
        return jsonify(status='success', msg='successfully created user'), 200

@bp.route('/logout', methods=['POST'])
@auth_required
def logout():
    if request.method == 'POST':
        req = request.get_json()
        data = guard.extract_jwt_token(req['token'])
        TokenBlacklist.add(token=data['jti'])
        return jsonify(status='success', msg='token blacklisted'), 200
