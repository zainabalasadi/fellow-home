# tests/conftest.py

import os
import pytest

from project import create_app, db, guard
from project.auth.models import User

@pytest.fixture(scope='module')
def test_client():
    flask_app = create_app('project.config.TestConfig')

    testing_client = flask_app.test_client()

    ctx = flask_app.app_context()

    ctx.push()

    yield testing_client

    ctx.pop()

@pytest.fixture(scope='module')
def init_database():
    db.create_all()
    u1 = User("First", "Last", "wow@gmail.com", guard.encrypt_password("wow"), "20/4/1990", "", "Male")

    db.session.add(u1)
    db.session.commit()

    yield db

    db.drop_all()
