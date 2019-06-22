# backend/project/__init__.py

import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()
cors = CORS()

def create_app():
    app = Flask(__name__)
    app.config.from_object(os.getenv('APP_SETTINGS'))

    db.init_app(app)
    cors.init_app(app)

    from project.controllers.routes import bp as routes

    app.register_blueprint(routes)

    return app
