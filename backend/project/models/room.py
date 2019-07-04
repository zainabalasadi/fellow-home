# backend/project/models/room.py

from datetime import date, time

class Room():
	def __init__(self, roomType, cost, furnished, y, m, d, min_stay):
		self._roomType = roomType
		self._cost = cost
		self._furnished = furnished
		self._availability = date(y, m, d)
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
	def availability(self):
		return self._availability

	@availability.setter
	def availability(self, y, m, d):
		self._availability = date(y, m, d)

	@property
	def min_stay(self):
		return self._min_stay
		
	@min_stay.setter
	def min_stay(self, var):
		self._min_stay = var
		