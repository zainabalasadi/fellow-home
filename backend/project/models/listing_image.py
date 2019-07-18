# backend/project/models/listing_image.py

from project import db

class ListingImage(db.Model):
    __tablename__ = 'ListingImage'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    url = db.Column(db.Text, nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)
