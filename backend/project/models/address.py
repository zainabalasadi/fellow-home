# backend/project/models/address.py

class Address():
	def __init__(self, unitNum, houseNum, name, suburb, postcode):
		self.unitNum = unitNum
		self.houseNum = houseNum
		self.name = name
		self.suburb = suburb
		self.postcode = postcode

	@property
	def unitNum(self):
		return self._unitNum

	@unitNum.setter
	def unitNum(self, var):
		return unitNum = var

	@property
	def houseNum(self):
		return self.houseNum

	@houseNum.setter
	def houseNum(self, var):
		return self.houseNum = var

	@property
	def name(self):
		return self.name

	@houseNum.setter
	def name(self, var):
		return self.houseNum = var

	@property
	def suburb(self):
		return self.suburb

	@suburb.setter
	def suburb(self, var):
		return self.suburb = var

	@property
	def postcode(self):
		return self.postcode

	@postcode.setter
	def postcode(self, var):
		return self.postcode = var
	
	
	
	
