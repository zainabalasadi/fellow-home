# backend/manage.py

import click
import json
import os
from flask.cli import FlaskGroup

from project import create_app, db, guard
from project.models.user import User
from project.models.listing import Listing
from project.models.room import Room

app = create_app()
cli = FlaskGroup(create_app=create_app)

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
            u = User(f_name=person['first_name'],
                     l_name=person['last_name'],
                     email=person['email'],
                     avatar=person['avatar'],
                     password=guard.encrypt_password(person['password']),
                     dob=person['dob'],
                     gender=person['gender'])
            db.session.add(u)
            count += 1
            if count == amount:
                break
    db.session.commit()

    p = User.query.get(1)
    listing = Listing("a house", "12/7/2019", 5, 2, 2, False, 100.0)
    rooms = [Room("single", 100.0, False, "12/7/2019", 90), 
             Room("double", 200.0, False, "12/7/2019", 90)]
    listing.rooms.extend(rooms)
    p.listings.append(listing)
    db.session.add(p)
    db.session.commit()

if __name__ == '__main__':
    cli()
