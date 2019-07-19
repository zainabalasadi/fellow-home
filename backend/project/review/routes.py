# backend/project/review/routes.py

from flask import Blueprint, Flask, jsonify, request
from flask_praetorian import auth_required
from flask_restful import Api, Resource

bp = Blueprint('review', __name__)
api = Api(bp)
