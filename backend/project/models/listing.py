# backend/project/models/listing.py

from project import db

class Listing(db.Model):
    __tablename__ = 'Listing'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128), nullable=False)
    date_published = db.Column(db.DateTime)
    num_housemates = db.Column(db.Integer)
    num_vacancies = db.Column(db.Integer)
    num_bathrooms = db.Column(db.Float)
    num_bedrooms = db.Column(db.Integer)
    has_garden = db.Column(db.Boolean)
    landsize = db.Column(db.Float)
    address = db.relationship('Address', backref='listing', uselist=False)
    rooms = db.relationship('Room', backref='room', lazy=True)

    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)

    def __init__(self, name, date_published, num_housemates, num_vacancies):
        self.name = name
        self.date_published = date_published
        # self.address = address
        # self.images = []
        # self.feature = feature
        self.num_housemates = num_housemates
        self.num_vacancies = num_vacancies
        # self.restrictions = []
        # self.room = []
        # self.tags = []
