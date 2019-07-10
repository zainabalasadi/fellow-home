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
        self._name = name
        self._date_published = date_published
        # self.address = address
        # self.images = []
        # self.feature = feature
        self._num_housemates = num_housemates
        self._num_vacancies = num_vacancies
        # self.restrictions = []
        # self.room = []

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, var):
        self._name = var

    @property
    def date_published(self):
        return self._date_published
    
    @date_published.setter
    def date_published(self, var):
        self._date_published = var

    # @property
    # def images(self):
    #     return self.images
    
    # @images.setter
    # def images(self, var):
    #     self._images = var

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

    # @property
    # def restrictions(self):
    #     return self._restrictions

    # @restrictions.setter
    # def restrictions(self, var):
    #     self._restrictions = var

    # @property
    # def room(self):
    #     return self._room

    # @room.setter
    # def setter(self, var):
        # self._room = var

    # def addImage(self, var):
    #     self._image.append(var)

    # def deleteImage(self, var):
    #     self._image.remove(var)
    
    # def addRoom(self, var):
    #     self._room.append(var)

    # def deleteRoom(self, var):
    #     self._room.remove(var)

    # def addRestrictions(self, var):
    #     self._restrictions.append(var)

    # def deleteRestrictions(self, var):
    #     self._restrictions.remove(var)
    
    