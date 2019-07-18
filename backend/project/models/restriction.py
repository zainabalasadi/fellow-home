# backend/project/models/restriction.py

from project import db

class Restriction(db.Model):
    __tablename__ = 'Restriction'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    restriction = db.Column(db.String(128), nullable=False)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    def __init__(self, restriction):
        self.restriction = restriction
