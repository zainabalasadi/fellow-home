# backend/manage.py

import click
import json
import os
from flask.cli import FlaskGroup

from project import create_app, db, guard
from project.models.user import User

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
            User.add(f_name=person['first_name'],
                     l_name=person['last_name'],
                     email=person['email'],
                     avatar=person['avatar'],
                     password=guard.encrypt_password(person['password']),
                     dob=person['dob'],
                     gender=person['gender'])
            count += 1
            if count == amount:
                break

if __name__ == '__main__':
    cli()
