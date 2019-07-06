# backend/project/models/address.py

from project import db

class Address(db.Model):
    __tablename__ = 'Address'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    unitNum = db.Column(db.Integer)
    name = db.Column(db.Text)
    suburb = db.Column(db.Text)
    postcode = db.Column(db.Integer)
    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), unique=True)

    def __init__(self, unitNum, name, suburb, postcode):
        self.unitNum = unitNum
        self.name = name
        self.suburb = suburb
        self.postcode = postcode

