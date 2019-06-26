# backend/project/models/user.py

from project import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(256))
    is_active = db.Column(db.Boolean, default=True)

    def __init__(self, email, password):
        self.email = email 
        self.password = password

    @property
    def rolenames(self):
        return []

    @classmethod
    def lookup(cls, email):
        return cls.query.filter_by(email=email).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active
