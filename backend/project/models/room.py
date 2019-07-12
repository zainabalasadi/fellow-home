# backend/project/models/room.py

from datetime import datetime
from project import db

class Room(db.Model):
    __tablename__ = 'Room'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    roomType = db.Column(db.String(128), nullable=False)
    cost = db.Column(db.Integer)
    furnished = db.Column(db.Boolean)
    availability = db.Column(db.DateTime)
    min_stay = db.Column(db.Integer)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    def __init__(self, roomType, cost, furnished, availability, min_stay):
        self.roomType = roomType
        self.cost = cost
        self.furnished = furnished
        self.availability = datetime.strptime(availability, "%d/%m/%Y")
        self.min_stay = min_stay
