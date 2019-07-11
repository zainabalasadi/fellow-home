# backend/project/models/room.py

from datetime import datetime
from project import db

class Room(db.Model):
    __tablename__ = 'Room'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    type = db.Column(db.String(128), nullable=False)
    cost = db.Column(db.Integer)
    furnished = db.Column(db.Boolean)
    available_from = db.Column(db.DateTime)
    min_stay = db.Column(db.Integer)

    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'), nullable=False)

    def __init__(self, roomType, cost, furnished, available_from, min_stay):
        self.roomType = roomType
        self.cost = cost
        self.furnished = furnished
        self.availability = datetime.strptime(available_from, "%d-%m-%Y")
        self.min_stay = min_stay
