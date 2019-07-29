# backend/project/user/models.py

from project import db, guard
from project.review.models import Review
from project.listing.models import Listing


class User(db.Model):
    __tablename__ = 'User'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False, unique=True)
    password = db.Column(db.String(256))
    gender = db.Column(db.Text)
    avatar = db.Column(db.Text, nullable=False)
    dob = db.Column(db.DateTime, nullable=False)
    # rating = db.Column(db.Float)
    verified = db.Column(db.Boolean, nullable=False, default=False)
    listings = db.relationship('Listing', backref='user', lazy=True)

    reviews_recv = db.relationship('Review', backref='from', primaryjoin=id == Review.reviewer_id)
    reviews_sent = db.relationship('Review', backref='to', primaryjoin=id == Review.reviewee_id)

    # flask-praetorian stuff
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True)

    def __init__(self, first_name, last_name, email, password, dob, avatar, gender):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = guard.hash_password(password)
        self.avatar = avatar
        self.dob = dob
        self.gender = gender
        # self._rating = rating
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
    def add(cls, user):
        db.session.add(user)
        db.session.commit()

        return user.id

    def add_listing(self, listing):
        return Listing.add(self, listing)

    def add_review(self, reviewee, review):
        Review.add(self, reviewee, review)
