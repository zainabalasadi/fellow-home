# backend/project/models/user.py

from project import db
from datetime import date, time

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    f_name = db.Column(db.String(128), nullable=False)
    l_name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(256))
    pic = db.Column(db.String(128), nullable=False)
    dob = db.Column(db.String(128), nullable=False)
    rating = db.Column(db.Double, nullable=False)
    verified = db.Column(db.Boolean, nullable=False)
    is_active = db.Column(db.Boolean, default=True)
    #check nullable var

    def __init__(self, f_name, l_name, email, password, pic, y, m, d, rating, verified):
        self.f_name = f_name
        self.l_name = l_name
        self.email = email 
        self.password = password
        self.pic = pic
        self.dob = date(y, m, d)
        self.rating = rating
        self.verified = verified

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
