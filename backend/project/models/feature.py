# backend/project/models/review.py

class Feature():
	def __init__(self, num_bathroom, num_bedroom, car_space, garden, landsize):
		self._num_bathroom = num_bathroom
		self._num_bedroom = num_bedroom
		self._car_space = car_space
		self._garden = garden
		self._landsize = landsize
		self._amenities = []

	@property
	def num_bathroom(self):
		return self._num_bathroom
	
	@num_bathroom.setter
	def num_bathroom(self, var):
		self._num_bathroom = var

	@property
	def num_bedroom(self):
		return self._num_bedroom
	
	@num_bedroom.setter
	def num_bedroom(self, var):
		self._num_bedroom = var

	@property
	def garden(self):
		return self._garden

	@garden.setter
	def garden(self, var):
		self._garden = var

	@property
	def landsize(self):
		return self._landsize

	@landsize.setter
	def landsize(self, var):
		self._landsize = var

	@property
	def amenities(self):
		return self._amenities

	@amenities.setter
	def amenities(self, var):
		self._amenities = var

	def addAmenities(self, var):
		self._amenities.append(var)

	def deleteAmenities(self, var):
		self._amenities.remove(var)	
	
	