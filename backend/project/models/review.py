# backend/project/models/review.py

class Review():
	def __init__(self, title, paragraph, image, rating, reviewed, reviewing):
		self.title = title
		self.paragraph = paragraph
		self.image = image
		self.rating = rating
		self.reviewed = reviewed
		self.reviewing = reviewing

	@property
	def title(self):
		return self._title

	@title.setter
	def title(self, var):
		return self.title = var

	@property
	def paragraph(self):
		return self.paragraph

	@paragraph.setter
	def paragraph(self, var):
		return self.paragraph = var

	@property
	def image(self):
		return self.image

	@image.setter
	def image(self, var):
		return self.image = var

	@property
	def rating(self):
		return self.rating

	@rating.setter
	def rating(self, var):
		return self.rating = var
	
	@property
	def reviewed(self):
		return self.reviewed

	@reviewed.setter
	def reviewed(self, var):
		return self.reviewed = var

	@property
	def reviewing(self):
		return self.reviewing

	@reviewing.setter
	def reviewing(self, var):
		return self.reviewing = var
	
	