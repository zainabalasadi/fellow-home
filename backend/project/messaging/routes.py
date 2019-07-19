# backend/project/messaging/routes.py

from flask import Blueprint, Flask, jsonify, request
from flask_praetorian import auth_required
from flask_restful import Api, Resource

bp = Blueprint('listing', __name__)
api = Api(bp)
