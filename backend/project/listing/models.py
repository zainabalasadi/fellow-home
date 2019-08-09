# backend/project/listing/models.py

from sqlalchemy.sql import func

from project import db
from project.review.models import Review


class Listing(db.Model):
    __tablename__ = 'Listing'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    property_type = db.Column(db.String(128))
    description = db.Column(db.Text)
    date_published = db.Column(db.DateTime)
    num_housemates = db.Column(db.Integer)
    num_vacancies = db.Column(db.Integer)
    num_bathrooms = db.Column(db.Integer)
    num_bedrooms = db.Column(db.Integer)
    landsize = db.Column(db.Float)
    rating = db.Column(db.Float)
    published = db.Column(db.Boolean, default=False)
    address = db.relationship('Address', backref='listing', uselist=False, cascade="all, delete-orphan")
    rooms = db.relationship('Room', backref='listing', lazy=True, cascade="all, delete-orphan")
    preferences = db.relationship('Preference', backref='listing', lazy=True, 
                                    cascade="all, delete-orphan")
    restrictions = db.relationship('Restriction', backref='listing', lazy=True,
                                   cascade="all, delete-orphan")
    images = db.relationship('ListingImage', backref='listing', lazy=True, cascade="all, delete-orphan")
    reviews = db.relationship('Review', backref='listing', lazy=True, cascade="all, delete-orphan")

    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)

    def __init__(self, name, property_type, description,
                 date_published, num_housemates, num_vacancies, num_bathrooms,
                 num_bedrooms, landsize, address, rooms, restrictions,
                 images, preferences, rating=0.0, published=False):
        self.name = name
        self.property_type = property_type
        self.description = description
        self.num_housemates = num_housemates
        self.num_vacancies = num_vacancies
        self.num_bathrooms = num_bathrooms
        self.num_bedrooms = num_bedrooms
        self.date_published = date_published
        self.landsize = landsize
        self.address = address
        self.rooms = rooms
        self.restrictions = restrictions
        self.images = images
        self.preferences = preferences
        self.rating = rating
        self.published = published
        # self.tags = []

    @classmethod
    def add(cls, user, listing):
        user.listings.append(listing)

        db.session.add(user)
        db.session.commit()

        return listing.id

    @classmethod
    def remove(cls, listing):
        db.session.delete(listing)
        db.session.commit()

    def add_review(self, reviewer, review):
        Review.add(self, reviewer, review)
        self._update_rating()

    def _update_rating(self):
        self.rating = db.session.query(func.avg(Review.rating)).filter(self.id == Review.listing_id)


class ListingImage(db.Model):
    __tablename__ = 'ListingImage'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.Text, nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)


class Room(db.Model):
    __tablename__ = 'Room'

    id = db.Column(db.Integer, primary_key=True)
    roomType = db.Column(db.String(128))
    cost = db.Column(db.Integer)
    furnished = db.Column(db.Text)
    availability = db.Column(db.DateTime)
    min_stay = db.Column(db.Integer)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    amenities = db.relationship('Amenity', backref='listing', lazy=True, cascade="all, delete-orphan")

    def __init__(self, roomType, cost, furnished, availability, min_stay, amenities):
        self.roomType = roomType
        self.cost = cost
        self.furnished = furnished
        self.availability = availability
        self.min_stay = min_stay
        self.amenities = amenities


class Address(db.Model):
    __tablename__ = 'Address'

    id = db.Column(db.Integer, primary_key=True)
    unitNum = db.Column(db.Integer)
    name = db.Column(db.Text)
    suburb = db.Column(db.Text)
    city = db.Column(db.Text)
    postcode = db.Column(db.Integer)
    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), unique=True)


class Preference(db.Model):
    __tablename__ = 'Feature'

    id = db.Column(db.Integer, primary_key=True)
    preference = db.Column(db.String(128), nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)


class Amenity(db.Model):
    __tablename__ = 'Amenity'

    id = db.Column(db.Integer, primary_key=True)
    amenity = db.Column(db.String(128), nullable=False)

    room_id = db.Column(db.Integer, db.ForeignKey('Room.id'), nullable=False)

    def __init__(self, amenity):
        self.amenity = amenity


class Restriction(db.Model):
    __tablename__ = 'Restriction'

    id = db.Column(db.Integer, primary_key=True)
    restriction = db.Column(db.String(128), nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    def __init__(self, restriction):
        self.restriction = restriction
