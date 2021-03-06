# backend/project/user/models.py

from project import db, guard
from project.review.models import Review
from project.listing.models import Listing

saved_listings = db.Table('saved_listings',
    db.Column('user_id', db.Integer, db.ForeignKey('User.id')),
    db.Column('listing_id', db.Integer, db.ForeignKey('Listing.id')),
    db.PrimaryKeyConstraint('user_id', 'listing_id')
)

class User(db.Model):
    __tablename__ = 'User'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False, unique=True)
    password = db.Column(db.String(256))
    gender = db.Column(db.Text, default='')
    avatar = db.Column(db.Text, default='')
    dob = db.Column(db.DateTime, default=None)
    description = db.Column(db.Text, default='')
    university = db.Column(db.Text)
    verified = db.Column(db.Boolean, nullable=False, default=False)
    listings = db.relationship('Listing', backref='user', lazy=True)
    saved = db.relationship('Listing', secondary=saved_listings, 
                            backref=db.backref('saved', lazy='dynamic'))

    reviews_sent = db.relationship('Review', backref='user', lazy=True)

    # flask-praetorian stuff
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True)

    def __init__(self, first_name, last_name, email, password, university, 
                dob=None, avatar='', gender='', description=''):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = guard.hash_password(password)
        self.avatar = avatar
        self.dob = dob
        self.gender = gender
        self.description = description
        self.university = university
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

    def add_save_listing(self, listing):
        self.saved.append(listing)
        db.session.commit()

    def remove_save_listing(self, listing):
        self.saved.remove(listing)
        db.session.commit()
