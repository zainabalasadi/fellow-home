# backend/project/review/models.py

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
