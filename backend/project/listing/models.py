# backend/project/listing/models.py

from datetime import datetime

from project import db

class Listing(db.Model):
    __tablename__ = 'Listing'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128), nullable=False)
    property_type = db.Column(db.String(128))
    description = db.Column(db.Text)
    date_published = db.Column(db.DateTime)
    num_housemates = db.Column(db.Integer)
    num_vacancies = db.Column(db.Integer)
    num_bathrooms = db.Column(db.Integer)
    num_bedrooms = db.Column(db.Integer)
    landsize = db.Column(db.Float)
    address = db.relationship('Address', backref='listing', uselist=False)
    rooms = db.relationship('Room', backref='listing', lazy=True)
    features = db.relationship('Feature', backref='listing', lazy=True)
    amenities = db.relationship('Amenity', backref='listing', lazy=True)
    restrictions = db.relationship('Restriction', backref='listing', lazy=True)
    images = db.relationship('ListingImage', backref='listing', lazy=True)

    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)

    def __init__(self, name, property_type, description, 
                date_published, num_housemates, num_vacancies, num_bathrooms, 
                num_bedrooms, landsize):
        self.name = name
        self.property_type = property_type
        self.description = description
        self.date_published = datetime.strptime(date_published, "%Y-%m-%dT%H:%M:%S.%fZ")
        self.num_housemates = num_housemates
        self.num_vacancies = num_vacancies
        self.num_bathrooms = num_bathrooms
        self.num_bedrooms = num_bedrooms
        self.landsize = landsize
        # self.tags = []

class ListingImage(db.Model):
    __tablename__ = 'ListingImage'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    url = db.Column(db.Text, nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

class Room(db.Model):
    __tablename__ = 'Room'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    roomType = db.Column(db.String(128))
    cost = db.Column(db.Integer)
    furnished = db.Column(db.Text)
    availability = db.Column(db.DateTime)
    min_stay = db.Column(db.Integer)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    def __init__(self, roomType, cost, furnished, availability, min_stay):
        self.roomType = roomType
        self.cost = cost
        self.furnished = furnished
        self.availability = datetime.strptime(availability, "%Y-%m-%d")
        self.min_stay = min_stay

class Address(db.Model):
    __tablename__ = 'Address'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    unitNum = db.Column(db.Integer)
    name = db.Column(db.Text)
    suburb = db.Column(db.Text)
    postcode = db.Column(db.Integer)
    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), unique=True)

class Feature(db.Model):
    __tablename__ = 'Feature'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    feature = db.Column(db.String(128), nullable=False)
    quantity = db.Column(db.Integer, default=1)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

class Amenity(db.Model):
    __tablename__ = 'Amenity'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    amenity = db.Column(db.String(128), nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    def __init__(self, amenity):
        self.amenity = amenity

class Restriction(db.Model):
    __tablename__ = 'Restriction'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    restriction = db.Column(db.String(128), nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    def __init__(self, restriction):
        self.restriction = restriction
