# backend/project/__init__.py

import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_praetorian import Praetorian
from flask_migrate import Migrate

db = SQLAlchemy()
cors = CORS()
guard = Praetorian()
migrate = Migrate()

from project.auth.models import User, TokenBlacklist
from project.listing.models import Listing, ListingImage, Room, Address, Feature, Amenity, Restriction
from project.review.models import Review

def create_app(config_file=os.getenv('APP_SETTINGS')):
    app = Flask(__name__)
    app.config.from_object(config_file)

    db.init_app(app)
    cors.init_app(app)
    guard.init_app(app, User, is_blacklisted=TokenBlacklist.lookup)
    migrate.init_app(app, db)

    from project.auth.routes import bp as auth_bp
    from project.listing.routes import bp as listing_bp
    from project.review.routes import bp as review_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(listing_bp)
    app.register_blueprint(review_bp)

    with app.app_context():
        db.create_all()

    @app.shell_context_processor
    def make_shell_context():
        return {'app': app, 'db': db, 'guard': guard, 'migrate': migrate}

    return app
