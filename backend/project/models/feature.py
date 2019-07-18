# backend/project/models/feature.py

from project import db

class Feature(db.Model):
    __tablename__ = 'Feature'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    feature = db.Column(db.String(128), nullable=False)
    quantity = db.Column(db.Integer, default=1)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)
