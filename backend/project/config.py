# backend/project/config.py

import os

BASE_DIR = os.path.abspath('.')

class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY')

class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')

class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'test.db')
    SECRET_KEY = 'test-secret'
