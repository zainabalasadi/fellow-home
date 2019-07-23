# backend/manage.py

import click
import json
import os

from datetime import datetime
from flask.cli import FlaskGroup
from flask_migrate import MigrateCommand

from project import create_app, db, guard
from project.user.models import User
from project.listing.models import Listing, Room, Address, Amenity, ListingImage, Feature

app = create_app()
cli = FlaskGroup(create_app=create_app)
cli.add_command('db', MigrateCommand)

@cli.command('recreate_db')
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

@cli.command('populate_db')
@click.argument('amount', default=1000)
def populate_db(amount):
    with open('data/people.json') as f:
        data = json.load(f)
        count = 0
        for person in data:
            u = User(first_name=person['first_name'],
                     last_name=person['last_name'],
                     email=person['email'],
                     avatar=person['avatar'],
                     password=person['password'],
                     dob=datetime.strptime(person['dob'], '%d/%m/%Y'),
                     gender=person['gender'])
            db.session.add(u)
            count += 1
            if count == amount:
                break
    db.session.commit()

    with open('data/listings.json') as f:
        data = json.load(f)
        for listing in data:
            user = User.query.get(listing['user_id'])

            address = Address(name=listing["map_data"]["street"],
                              suburb=listing["map_data"]["suburb"],
                              postcode=listing["map_data"]["postcode"])
            images = [ListingImage(url=url) for url in listing["images"]]
            amenities = [Amenity(amenity=amenity) for amenity in listing["amenities"]]
            rooms = [Room(roomType=room["attributes"]["room_type"],
                          cost=room["attributes"]["rent"],
                          furnished=room["attributes"]["furnishings"],
                          availability=datetime.strptime(room["attributes"]["date_available"], 
                                                        "%Y-%m-%d"),
                          min_stay=room["attributes"]["min_stay"] or 0)
                          for room in listing["rooms"]]
            features = [Feature(feature=feat) 
                        for room in listing["rooms"] 
                        for feat in room["attributes"]["room_features_attributes"]]

            new_listing = Listing(name=listing["title"],
                              property_type=listing["property_type"],
                              description=listing["description"],
                              date_published=listing["date_published"],
                              num_housemates=listing["occupants"],
                              num_vacancies=listing["vacancies"],
                              num_bathrooms=listing["bathrooms"],
                              num_bedrooms=listing["bedrooms"],
                              landsize=listing["landsize"],
                              address=address,
                              rooms=rooms,
                              features=features,
                              amenities=amenities,
                              restrictions=[],
                              published=True)

            user.listings.append(new_listing)

            db.session.add(user)

    db.session.commit()

if __name__ == '__main__':
    cli()
