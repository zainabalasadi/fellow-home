# backend/project/models/listing.py

class Listing():
	def __init__(self, name, published, address, feature, num_housemates, num_vacancies):
		self._name = name
		self._published = published
		self._address = address
		self._images = []
		self._feature = feature
		self._num_housemates = num_housemates
		self._num_vacancies = num_vacancies
		self._restrictions = []
		self._room = []

	@property
	def name(self):
		return self._name
	
	@name.setter
	def name(self, var):
		self._name = var

	@property
	def published(self):
		return self._published
	
	@published.setter
	def published(self, var):
		self._published = var

	@property
	def images(self):
		return self.images
	
	@images.setter
	def images(self, var):
		self._images = var

	@property
	def feature(self):
		return self._feature
	
	@feature.setter
	def feature(self, var):
		self._feature = var

	@property
	def num_housemates(self):
		return self._num_housemates

	@num_housemates.setter
	def num_housemates(self, var):
		self._num_housemates = var

	@property
	def num_vacancies(self):
		return self._num_vacancies

	@num_vacancies.setter
	def num_vacancies(self, var):
		self._num_vacancies = var

	@property
	def restrictions(self):
		return self._restrictions

	@restrictions.setter
	def restrictions(self, var):
		self._restrictions = var

	@property
	def room(self):
		return self._room

	@room.setter
	def setter(self, var):
		self._room = var

	def addImage(self, var):
		self._image.append(var)

	def deleteImage(self, var):
		self._image.remove(var)
	
	def addRoom(self, var):
		self._room.append(var)

	def deleteRoom(self, var):
		self._room.remove(var)

	def addRestrictions(self, var):
		self._restrictions.append(var)

	def deleteRestrictions(self, var):
		self._restrictions.remove(var)
	
	