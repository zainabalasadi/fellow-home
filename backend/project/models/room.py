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
        self._roomType = roomType
        self._cost = cost
        self._furnished = furnished
        self._availability = datetime.strptime(available_from, "%d-%m-%Y")
        self._min_stay = min_stay

	@property
	def roomType(self):
		return self._roomType

	@roomType.setter
	def roomType(self, var):
		self._roomType = var
		
	@property
	def cost(self):
		return self._cost

	@cost.setter
	def cost(self, var):
		self._cost = var

	@property
	def furnished(self):
		return self._furnished

	@furnished.setter
	def furnished(self, var):
		self._furnished = var

	@property
	def available_from(self):
		return self._availability

	@available_from.setter
	def available_from(self, y, m, d):
		self._availability = datetime.strptime(available_from, "%d-%m-%Y")

	@property
	def min_stay(self):
		return self._min_stay
		
	@min_stay.setter
	def min_stay(self, var):
		self._min_stay = var
		