# backend/project/review/models.py

from project import db


class Review(db.Model):
    __tablename__ = 'Review'

    id = db.Column(db.Integer, primary_key=True)
    reviewee_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    reviewer_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    title = db.Column(db.String(128), nullable=False)
    content = db.Column(db.String(512))
    rating = db.Column(db.Float)

    def __init__(self, title, content, rating):
        self.title = title
        self.content = content
        # self.image = []
        self.rating = rating

    @classmethod
    def add(cls, reviewee, reviewer, review):
        review.reviewee_id = reviewee.id
        review.reviewer_id = reviewer.id

        reviewee.reviews_recv.append(review)
        reviewer.reviews_sent.append(review)

        db.session.commit()

    def __repr__(self):
        return f'{self.reviewee_id}\n{self.reviewer_id}\n{self.title}\n{self.content}\n{self.rating}'
