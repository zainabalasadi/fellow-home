# backend/project/review/routes.py

from flask import Blueprint, Flask, jsonify, request
from flask_praetorian import auth_required

bp = Blueprint('review', __name__)
