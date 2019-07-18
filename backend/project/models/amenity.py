# backend/project/models/amenity.py

from project import db

class Amenity(db.Model):
    __tablename__ = 'Amenity'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    amenity = db.Column(db.String(128), nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    def __init__(self, amenity):
        self.amenity = amenity
