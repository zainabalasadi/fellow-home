# backend/project/listing/schemas.py

from project import ma
from project.listing.models import Listing, ListingImage, Room, Address, Feature, Amenity, Restriction


class ListingImageSchema(ma.ModelSchema):
    class Meta:
        model = ListingImage
        fields = ('url', )

class RoomSchema(ma.ModelSchema):
    class Meta:
        model = Room
        fields = ('roomType', 'cost', 'furnished', 'availability', 'min_stay')

class AddressSchema(ma.ModelSchema):
    class Meta:
        model = Address
        fields = ('name', 'suburb', 'postcode')

class FeatureSchema(ma.ModelSchema):
    class Meta:
        model = Feature
        fields = ('feature', )

class AmenitySchema(ma.ModelSchema):
    class Meta:
        model = Amenity
        fields = ('amenity', )

class RestrictionSchema(ma.ModelSchema):
    class Meta:
        model = Restriction
        fields = ('restriction', )

class ListingSchema(ma.ModelSchema):
    class Meta:
        model = Listing

    images = ma.Nested(ListingImageSchema, many=True)
    rooms = ma.Nested(RoomSchema, many=True)
    address = ma.Nested(AddressSchema)
    features = ma.Nested(FeatureSchema, many=True)
    amenities = ma.Nested(AmenitySchema, many=True)
    restrictions = ma.Nested(RestrictionSchema, many=True)
