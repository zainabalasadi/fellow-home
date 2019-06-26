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

def create_app(config_file=os.getenv('APP_SETTINGS')):
    app = Flask(__name__)
    app.config.from_object(config_file)

    db.init_app(app)
    cors.init_app(app)
    guard.init_app(app, User)

    from project.controllers.routes import bp as routes

    app.register_blueprint(routes)

    with app.app_context():
        db.drop_all()
        db.create_all()
        db.session.add(User("wow@gmail.com", "wow"))
        db.session.commit()

    @app.shell_context_processor
    def make_shell_context():
        return {'app': app, 'db': db, 'guard': guard}

    return app
