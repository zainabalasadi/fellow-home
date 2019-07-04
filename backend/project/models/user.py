# backend/project/models/user.py

from project import db
from datetime import date, time

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # first_name = db.Column(db.String(128), nullable=False)
    # last_name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(256))
    roles = db.Column(db.Text)
    # pic = db.Column(db.String(128), nullable=False)
    # dob = db.Column(db.String(128), nullable=False)
    # rating = db.Column(db.Float, nullable=False)
    verified = db.Column(db.Boolean, nullable=False)
    is_active = db.Column(db.Boolean, default=True)

    def __init__(self, email, password):
    # def __init__(self, f_name, l_name, email, password, pic, y, m, d, rating, verified):
        # self._first_name = f_name
        # self._last_name = l_name
        self.email = email 
        self.password = password
        # self._pic = pic
        # self._dob = date(y, m, d)
        # self._rating = rating
        # self._verified = verified
        self._listings = []
        self._savedListings = []
        self._socials = []

    # @property
    # def first_name(self):
    #     return self._first_name

    # @first_name.setter
    # def first_name(self, var):
    #     self._first_name = var

    # @property
    # def last_name(self):
    #     return self._last_name

    # @last_name.setter
    # def last_name(self, var):
    #     self._last.name = var

    # @property
    # def pic(self):
    #     return self._pic

    # @pic.setter
    # def pic(self, var):
    #     self.pic = var

    # @property
    # def dob(self):
    #     return self._dob

    # @dob.setter
    # def dob(self, var):
    #     self._dob = var

    # @property
    # def rating(self):
    #     return self._rating

    # @rating.setter
    # def rating(self, var):
    #     self._rating = var

    @property
    def verified(self):
        return self._verified

    @verified.setter
    def verified(self, var):
        self._verified = var

    @property
    def listings(self):
        return self._listings

    @property
    def savedListings(self):
        return self._savedListings
    
    def deleteListing(self, var):
        self._listings.remove(var)

    def deletesavedListings(self, var):
        self._savedListings.remove(var)

    def addSocial(self, var):
        self._socials.append(var)

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

    @classmethod
    def add(cls, **kwargs):
        user = User(**kwargs)
        db.session.add(user)
        db.session.commit()
