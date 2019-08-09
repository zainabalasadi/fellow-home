# backend/project/review/models.py

from datetime import datetime
from project import db


class Review(db.Model):
    __tablename__ = 'Review'

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey('Listing.id'))
    reviewer_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    title = db.Column(db.String(128), nullable=False)
    content = db.Column(db.Text)
    rating = db.Column(db.Float)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    @classmethod
    def add(cls, listing, reviewer, review):
        listing.reviews.append(review)
        reviewer.reviews_sent.append(review)

        db.session.commit()

    def __repr__(self):
        return f'{self.reviewee_id}\n{self.reviewer_id}\n{self.title}\n{self.content}\n{self.rating}'
