# backend/project/__init__.py

import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_praetorian import Praetorian

db = SQLAlchemy()
cors = CORS()
guard = Praetorian()

from project.models.user import User
from project.models.listing import Listing
from project.models.address import Address
from project.models.room import Room
from project.models.review import Review
from project.models.blacklist import TokenBlacklist

def create_app(config_file=os.getenv('APP_SETTINGS')):
    app = Flask(__name__)
    app.config.from_object(config_file)

    db.init_app(app)
    cors.init_app(app)
    guard.init_app(app, User, is_blacklisted=TokenBlacklist.lookup)

    from project.controllers.routes import bp as routes

    app.register_blueprint(routes)

    with app.app_context():
        db.create_all()

    @app.shell_context_processor
    def make_shell_context():
        return {'app': app, 'db': db, 'guard': guard}

    return app
