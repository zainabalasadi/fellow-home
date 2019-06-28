# backend/project/models/user.py

from datetime import date, time

class Room():
	def __init__(self, roomType, cost, furnished, y, m , d, min_stay):
		self.roomType = roomType
		self.cost = cost
		self.furnished = furnished
		self.availability = date(y, m, d)
		self.min_stay = min_stay

		@property
		def roomType(self):
			return self.roomType

		@roomType.setter
		def roomType(self, var):
			self.roomType = var
		
		@property
		def cost(self):
			return self.cost

		@cost.setter
		def cost(self, var):
			self.cost = var

		@property
		def furnished(self):
			return self._furnished

		@furnished.setter
		def furnished(self, var):
			self.furnished = var

		@property
		def availability(self):
			return self._availability

		@availability.setter
		def availability(self, y, m, d):
			self.availability = date(y, m, d)

		@property
		def min_stay(self):
			return self.min_stay
		
		@min_stay.setter
		def min_stay(self, var):
			return self = var
		
		