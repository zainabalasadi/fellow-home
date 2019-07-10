# backend/project/models/user.py

from datetime import datetime

from project import db
from project.models.review import Review

class User(db.Model):
    __tablename__ = 'User'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False, unique=True)
    password = db.Column(db.String(256))
    gender = db.Column(db.Text)
    avatar = db.Column(db.Text, nullable=False)
    dob = db.Column(db.DateTime, nullable=False)
    # rating = db.Column(db.Float, nullable=False)
    verified = db.Column(db.Boolean, nullable=False, default=False)
    listings = db.relationship('Listing', backref='user', lazy=True)

    reviewee = db.relationship('Review', backref='to', primaryjoin=id==Review.reviewee_id)
    reviewer = db.relationship('Review', backref='from', primaryjoin=id==Review.reviewer_id)

    # flask-praetorian stuff
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True)


    def __init__(self, f_name, l_name, email, password, dob, avatar, gender):
        self._first_name = f_name
        self._last_name = l_name
        self._email = email 
        self._password = password
        self._avatar = avatar
        self._gender = gender
        self._dob = datetime.strptime(dob, "%d/%m/%Y")
        # self._rating = rating
        # self._listings = []
        # self._savedListings = []
        # self._socials = []

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

    @property
    def first_name(self):
        return self._first_name

    @first_name.setter
    def first_name(self, var):
        self._first_name = var

    @property
    def last_name(self):
        return self._last_name

    @last_name.setter
    def last_name(self, var):
        self._last.name = var

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, var):
        self._email = var

    @property
    def password(self):
        return self._password

    @password.setter
    def password(self, var):
        self._password = var
    
    @property
    def avatar(self):
        return self._avatar

    @avatar.setter
    def avatar(self, var):
        self._avatar = var

    @property
    def gender(self):
        return self._gender
    
    @gender.setter
    def gender(self, var):
        self._gender = var

    @property
    def dob(self):
        return self._dob

    @dob.setter
    def dob(self, var):
        self._dob = var

    # @property
    # def rating(self):
    #     return self._rating

    # @rating.setter
    # def rating(self, var):
    #     self._rating = var

    # @property
    # def listings(self):
    #     return self._listings

    # def addListing(self, listing):
    #     self._listing.append(listing)

    # def deleteListing(self, var):
    #     self._listings.remove(var)

    # @property
    # def savedListings(self):
    #     return self._savedListings

    # def deletesavedListings(self, var):
    #     self._savedListings.remove(var)

    # @property
    # def socials(self):
    #     return self._socials

    # def addSocial(self, var):
    #     self._socials.append(var)

    # def deleteSocials(self, var):
    #     self._socials.remove(var)

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

