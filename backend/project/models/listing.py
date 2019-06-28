# backend/project/models/listing.py

class Listing():
	def __init__(self, name, published, address, images, feature, num_housemates, num_vacancies, restrictions, rooms):
		self.name = name
		self.published = published
		self.address = address
		self.images = images
		self.feature = feature
		self.num_housemates = num_housemates
		self.num_vacancies = num_vacancies
		self.restrictions = restrictions
		self.room = room

	@property
	def name(self):
		return self.name
	
	@name.setter
	def name(self, var):
		return self.name = var

	@property
	def published(self):
		return self.published
	
	@name.published
	def published(self, var):
		return self.published = var

	@property
	def images(self):
		return self.images
	
	@property
	def images(self, var):
		return self.images = var

	@property
	def feature(self):
		return self.feature
	
	@feature.setter
	def feature(self, var):
		return self.feature = var

	@property
	def num_housemates(self):
		return self.num_housemates

	@num_housemates.setter
	def num_housemates(self, var):
		return self.num_housemates = var

	@property
	def num_vacancies(self):
		return self.num_vacancies

	@num_vacancies.setter
	def num_vacancies(self, var):
		return self.num_vacancies = var

	@property
	def restrictions(self):
		return self.restrictions

	@restrictions.setter
	def restrictions(self, var):
		return self.restrictions = var

	@property
	def room(self):
		return self.room

	@room.setter
	def setter(self, var):
		return self.room = var
	
	
	