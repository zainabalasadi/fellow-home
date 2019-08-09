#!/usr/local/bin/python3
# backend/manage.py

import click
import json
import os

from datetime import datetime
from flask.cli import FlaskGroup
from flask_migrate import MigrateCommand

from project import create_app, db, guard
from project.user.models import User
from project.listing.models import Listing, Room, Address, Amenity, ListingImage, Preference, Restriction
from project.review.models import Review

app = create_app()
cli = FlaskGroup(create_app=create_app)
cli.add_command('db', MigrateCommand)


@cli.command('recreate_db')
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

def populate_users():
    with open('data/people.json') as f:
        data = json.load(f)
        for person in data:
            u = User(first_name=person['first_name'],
                     last_name=person['last_name'],
                     email=person['email'],
                     avatar=person['avatar'],
                     password=person['password'],
                     dob=datetime.strptime(person['dob'], '%d/%m/%Y'),
                     gender=person['gender'],
                     description=person['description'],
                     university=person['university'])
            db.session.add(u)
    db.session.commit()

def populate_listings():
    with open('data/listings.json') as f:
        data = json.load(f)
        for listing in data:
            user = User.query.get(listing['user_id'])

            address = Address(name=listing["location"]["street"],
                              suburb=listing["location"]["suburb"],
                              city=listing["location"]["city"],
                              postcode=listing["location"]["postcode"])
            images = [ListingImage(url=url) for url in listing["images"]]
            preferences = [Preference(preference=preference["title"])
                           for preference in listing["preferences"]]
            restrictions = [Restriction(restriction=restriction)
                            for restriction in listing["restrictions"]]

            rooms = []
            for room in listing["rooms"]:
                amenities = [Amenity(amenity=amenity["title"]) for amenity in room["features"]]
                rooms.append(Room(roomType=room["roomType"]["value"],
                                  cost=room["charges"]["weeklyRent"]["code"],
                                  furnished=room["furnishings"]["value"],
                                  availability=datetime.strptime(room["availability"]["code"],
                                                                 "%d-%m-%Y"),
                                  min_stay=room["minStay"] or 0,
                                  amenities=amenities))

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
                                  restrictions=restrictions,
                                  images=images,
                                  preferences=preferences,
                                  published=True)

            user.listings.append(new_listing)

    db.session.commit()

def populate_reviews():
    with open('data/reviews.json') as f:
        data = json.load(f)
        for review in data:
            rev_from = User.query.get(review['from'])
            listing = Listing.query.get(review['to'])
            new_review = Review(title=review['title'],
                                content=review['content'],
                                rating=review['rating']['Overall'],
                                created_at=datetime.strptime(review["date"],
                                                                 "%B %d, %Y"))

            rev_from.reviews_sent.append(new_review)
            listing.reviews.append(new_review)
            listing._update_rating()

    db.session.commit()


@cli.command('populate_db')
def populate_db():
    populate_users()
    populate_listings()
    populate_reviews()


if __name__ == '__main__':
    cli()
