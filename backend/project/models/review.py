# backend/project/models/review.py

from project import db

class Review(db.Model):
    __tablename__ = 'Review'

    reviewee_id = db.Column(db.Integer, db.ForeignKey('User.id'), primary_key=True)
    reviewer_id = db.Column(db.Integer, db.ForeignKey('User.id'), primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    content = db.Column(db.String(512))
    rating = db.Column(db.Float)

    def __init__(self, title, content, rating, reviewee, reviewer):
        self.title = title
        self.content = content
        #self.image = []
        self.rating = rating
        self.reviewee = reviewee
        self.reviewer = reviewer

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, var):
        self._title = var

    @property
    def content(self):
        return self._content

    @content.setter
    def content(self, var):
        self._content = var

    # @property
    # def image(self):
    #     return self._image

    # @image.setter
    # def image(self, var):
    #     self._image = var

    @property
    def rating(self):
        return self._rating

    @rating.setter
    def rating(self, var):
        self._rating = var
    
    @property
    def reviewee(self):
        return self._reviewee

    @reviewee.setter
    def reviewee(self, var):
        self._reviewee = var

    @property
    def reviewer(self):
        return self._reviewer

    @reviewer.setter
    def reviewer(self, var):
        self._reviewer = var

    # def addImage(self, var):
    #     self._image.append(var)

    # def deleteImage(self, var):
    #     self._image.remove(var)