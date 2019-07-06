# backend/project/models/user.py

from datetime import datetime

from project import db
from project.models.review import Review

class User(db.Model):
    __tablename__ = 'User'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(256))
    # pic = db.Column(db.String(128), nullable=False)
    dob = db.Column(db.DateTime, nullable=False)
    # rating = db.Column(db.Float, nullable=False)
    verified = db.Column(db.Boolean, nullable=False, default=False)
    listings = db.relationship('Listing', backref='user', lazy=True)

    reviewee = db.relationship('Review', backref='to', primaryjoin=id==Review.reviewee_id)
    reviewer = db.relationship('Review', backref='from', primaryjoin=id==Review.reviewer_id)

    # flask-praetorian stuff
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True)


    def __init__(self, f_name, l_name, email, password, dob):
        self.first_name = f_name
        self.last_name = l_name
        self.email = email 
        self.password = password
        # self._pic = pic
        self.dob = datetime.strptime(dob, "%d-%m-%Y")
        # self._rating = rating

    @property
    def rolenames(self):
        return []

    @classmethod
    def lookup(cls, email):
        return cls.query.filter_by(email=email).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active

    @classmethod
    def add(cls, **kwargs):
        user = User(**kwargs)
        db.session.add(user)
        db.session.commit()
