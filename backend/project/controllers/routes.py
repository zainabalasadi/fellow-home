# backend/project/controllers/routes.py

from flask import Blueprint, jsonify

bp = Blueprint('routes', __name__)

@bp.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'HELLO WORLD'})
