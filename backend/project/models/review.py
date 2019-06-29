# backend/project/models/review.py

class Review():
	def __init__(self, title, paragraph, rating, reviewed, reviewing):
		self._title = title
		self._paragraph = paragraph
		self._image = []
		self._rating = rating
		self._reviewed = reviewed
		self._reviewing = reviewing

	@property
	def title(self):
		return self._title

	@title.setter
	def title(self, var):
		self._title = var

	@property
	def paragraph(self):
		return self._paragraph

	@paragraph.setter
	def paragraph(self, var):
		self._paragraph = var

	@property
	def image(self):
		return self._image

	@image.setter
	def image(self, var):
		self._image = var

	@property
	def rating(self):
		return self._rating

	@rating.setter
	def rating(self, var):
		self._rating = var
	
	@property
	def reviewed(self):
		return self._reviewed

	@reviewed.setter
	def reviewed(self, var):
		self._reviewed = var

	@property
	def reviewing(self):
		return self._reviewing

	@reviewing.setter
	def reviewing(self, var):
		self._reviewing = var

	def addImage(self, var):
		self._image.append(var)

	def deleteImage(self, var):
		self._image.remove(var)