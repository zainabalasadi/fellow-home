# backend/project/controllers/routes.py

from flask import Blueprint, jsonify, Flask, redirect, request, render_template, url_for, abort
from flask_praetorian import auth_required

from project import guard

bp = Blueprint('routes', __name__)

@bp.route('/', methods=['GET'])
@auth_required
def index():
    return jsonify({'message': 'HELLO WORLD'})

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

@bp.route('/register',methods=['GET','POST'])
def register():
    if request.method == "POST":
        user_id = request.form["username"]
        password = request.form["password"]
        return 'register guests'

@bp.route('/editprofile',methods=['GET','POST'])
def editprofile():
    if request.method == "POST":
        contact = request.form["contact"]
        about = request.form["about"]
        school = request.form["school"]
        study = request.form["study"]
        return 'editing profile'

@bp.route('/postproperty',methods=['GET','POST'])
def postproperty():
    return

@bp.route('/editproperty',methods=['GET','POST'])
def editproperty():
    return

@bp.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))
