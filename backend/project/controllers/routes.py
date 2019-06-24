# backend/project/controllers/routes.py

from flask import Blueprint, jsonify
from flask import Flask, redirect, request, render_template, url_for, abort

bp = Blueprint('routes', __name__)

@bp.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'HELLO WORLD'})

@bp.route('/login',methods=['GET','POST'])
def login():
	if request.method == "POST":
		user_id = request.form["username"]
		password = request.form["password"]
	return 'login page'
    #return redirect(url_for('/'))
            #current_user = usersys.validate_login(user_id, password)
            #if current_user != None:
            #    login_user(current_user)
            #    return redirect(url_for('index'))
            #else:
            #    return render_template("login.html", error=True)
        #except ValueError:
            #print("couldn't convert")
            #return render_template("login.html", error=True)

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