# backend/project/messaging/routes.py

from flask import Blueprint, Flask, request
from flask_praetorian import auth_required
from flask_restful import Api, Resource

bp = Blueprint('messaging', __name__)
api = Api(bp)
