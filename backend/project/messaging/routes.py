# backend/project/messaging/routes.py

from flask import Blueprint, Flask, jsonify, request
from flask_praetorian import auth_required

bp = Blueprint('listing', __name__)
