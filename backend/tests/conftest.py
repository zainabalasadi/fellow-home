# tests/conftest.py

import os
import pytest

from project import create_app, db
from project.models.user import User

@pytest.fixture
def test_client():
    flask_app = create_app('project.config.TestConfig')

    testing_client = flask_app.test_client()

    ctx = flask_app.app_context()

    ctx.push()

    yield testing_client

    ctx.pop()

@pytest.fixture
def init_database():
    db.create_all
    u1 = User("wow@gmail.com", "wow")

    db.session.add(u1)
    db.session.commit()

    yield db

    db.drop_all()
    

