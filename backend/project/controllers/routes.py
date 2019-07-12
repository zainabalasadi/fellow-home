# backend/project/controllers/routes.py

from flask import Blueprint, jsonify, Flask, redirect, request, render_template, url_for, abort
from flask_praetorian import auth_required

from project import guard
from project.models.user import User
from project.models.listing import Listing
from project.models.error import SignUpError, DetailError
from project.models.blacklist import TokenBlacklist

bp = Blueprint('routes', __name__)

@bp.route('/', methods=['GET'])
@auth_required
def index():
    return jsonify({'message': 'HELLO WORLD'})

@bp.route('/image_test', methods=['GET', 'POST'])
def image_test():
    print(request.files['file'])

    return

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
    return

@bp.route('/google_login', methods=['POST'])
def google_login():
    # same idea as facebook login
    return

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

@bp.route('/editprofile',methods=['GET','POST'])
def editprofile():
    if request.method == "POST":
        req = request.get_json()
        contact = req["contact"]
        about = req["about"]
        school = req["school"]
        study = req["study"]
        return 'editing profile'

@bp.route('/postproperty',methods=['GET','POST'])
def postproperty():
    def editprofile():
    if request.method == "POST":
        req = request.get_json()
        name = req['name']
        date_published = req['date_published']
        num_housemates = req['num_housemates']
        num_vacancies = req['num_vacancies']
        num_bedrooms = req['num_bedrooms']
        has_garden = req['has_garden']
        landsize = req['landsize']
        try:
            if (name == ""):
                raise DetailError("Please provide a title")
            elif (num_housemates < 0):
                raise DetailError("Please provide the number of housemates")
            elif (num_vacancies < 0):
                raise DetailError("Please provide the number of vacancies")
            elif (num_bedrooms < 0):
                raise DetailError("Please provide the number of bedrooms")
            elif (landsize < 0):
                raise DetailError("Please provide the landsize")
        except DetailError as error:
            return error.message
        Listing.add(name=name, date_published=date_published, num_housemates=num_housemates, num_vacancies=num_vacancies, num_bedrooms=num_bedrooms, has_garden=has_garden, landsize=landsize)
        return jsonify(status='success', msg='successfully created listing'), 200

@bp.route('/editproperty',methods=['GET','POST'])
def editproperty():
    return
