# backend/project/models/address.py

class Address():
	def __init__(self, unitNum, name, suburb, postcode):
		self._unitNum = unitNum
		self._name = name
		self._suburb = suburb
		self._postcode = postcode

	@property
	def unitNum(self):
		return self._unitNum

	@unitNum.setter
	def unitNum(self, var):
		self._unitNum = var

	@property
	def name(self):
		return self._name

	@name.setter
	def name(self, var):
		self._name = var
	
	@property
	def suburb(self):
		return self._suburb

	@suburb.setter
	def suburb(self, var):
		self._suburb = var

	@property
	def postcode(self):
		return self._postcode

	@postcode.setter
	def postcode(self, var):
		self._postcode = var
	
	
	
