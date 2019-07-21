# backend/project/listing/schemas.py

from marshmallow import post_dump

from project import ma
from project.listing.models import Listing, ListingImage, Room, Address, Feature, Amenity, Restriction

class ListingImageSchema(ma.ModelSchema):
    class Meta:
        model = ListingImage
        fields = ('url', )

    @post_dump(pass_many=True)
    def convert_to_list(self, out_data, many, **kwargs):
        return [x['url'] for x in out_data]

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

    @post_dump(pass_many=True)
    def convert_to_list(self, out_data, many, **kwargs):
        return [x['feature'] for x in out_data]

class AmenitySchema(ma.ModelSchema):
    class Meta:
        model = Amenity
        fields = ('amenity', )

    @post_dump(pass_many=True)
    def convert_to_list(self, out_data, many, **kwargs):
        return [x['amenity'] for x in out_data]

class RestrictionSchema(ma.ModelSchema):
    class Meta:
        model = Restriction
        fields = ('restriction', )

    @post_dump(pass_many=True)
    def convert_to_list(self, out_data, many, **kwargs):
        return [x['restriction'] for x in out_data]

class ListingSchema(ma.ModelSchema):
    class Meta:
        model = Listing

    images = ma.Nested(ListingImageSchema, many=True)
    rooms = ma.Nested(RoomSchema, many=True)
    address = ma.Nested(AddressSchema)
    features = ma.Nested(FeatureSchema, many=True)
    amenities = ma.Nested(AmenitySchema, many=True)
    restrictions = ma.Nested(RestrictionSchema, many=True)
