# backend/project/models/listing.py

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
        # self.images = []
        self.num_housemates = num_housemates
        self.num_vacancies = num_vacancies
        self.num_bathrooms = num_bathrooms
        self.num_bedrooms = num_bedrooms
        self.landsize = landsize
        # self.tags = []
