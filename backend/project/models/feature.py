# backend/project/models/review.py

class Feature():
    def __init__(self, num_bathroom, num_bedroom, car_space, garden, landsize):
        self.num_bathroom = num_bathroom
        self.num_bedroom = num_bedroom
        self.car_space = car_space
        self.garden = garden
        self.landsize = landsize
        self.amenities = []

        @property
        def num_bathroom(self):
            return self.num_bathroom

        @num_bathroom.setter
        def num_bathroom(self, var):
            self.num_bathroom = var

        @property
        def num_bedroom(self):
            return self.num_bedroom

        @num_bedroom.setter
        def num_bedroom(self, var):
            self.num_bedroom = var

        @property
        def garden(self):
            return self.garden

        @garden.setter
        def garden(self, var):
            self.garden = var

        @property
        def landsize(self):
            return self.landsize

        @landsize.setter
        def landsize(self, var):
            self.landsize = var

        @property
        def amenities(self):
        	return self.amenities

        @amenities.setter
        def amenities(self, var):
        	self.amenities = var

        def addAmenities(self, var):
        	self.amenities.append(var)

        def deleteAmenities(self, var):
        	self.amenities.remove(var)	


