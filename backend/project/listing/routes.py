# backend/project/listing/routes.py

from flask import Blueprint, Flask, jsonify, request
from flask_praetorian import auth_required
from flask_restful import Api, Resource

from project.listing.errors import DetailError

bp = Blueprint('listing', __name__)
api = Api(bp)

class CreateListing(Resource):
    def post(self):
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
            return {'status': 'error', 'msg': error.message}
        Listing.add(name=name, 
                    date_published=date_published, 
                    num_housemates=num_housemates, 
                    num_vacancies=num_vacancies, 
                    num_bedrooms=num_bedrooms, 
                    has_garden=has_garden, 
                    landsize=landsize)
        return {'status': 'success', 'msg': 'successfully created listing'}

api.add_resource(CreateListing, '/create')
