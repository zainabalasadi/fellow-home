# backend/project/listing/schemas.py

from marshmallow import post_dump, pre_load, validates_schema, ValidationError

from project import ma
from project.listing.models import Listing, ListingImage, Room, Address, Feature, Amenity, Restriction


class ListingImageSchema(ma.ModelSchema):
    class Meta:
        model = ListingImage
        fields = ('url',)

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
        fields = ('feature',)

    @post_dump(pass_many=True)
    def convert_to_list(self, out_data, many, **kwargs):
        return [x['feature'] for x in out_data]

    @pre_load(pass_many=True)
    def convert_from_list(self, in_data, many, **kwargs):
        return [{"feature": x} for x in in_data]


class AmenitySchema(ma.ModelSchema):
    class Meta:
        model = Amenity
        fields = ('amenity',)

    @post_dump(pass_many=True)
    def convert_to_list(self, out_data, many, **kwargs):
        return [x['amenity'] for x in out_data]

    @pre_load(pass_many=True)
    def convert_from_list(self, in_data, many, **kwargs):
        return [{"amenity": x} for x in in_data]


class RestrictionSchema(ma.ModelSchema):
    class Meta:
        model = Restriction
        fields = ('restriction',)

    @post_dump(pass_many=True)
    def convert_to_list(self, out_data, many, **kwargs):
        return [x['restriction'] for x in out_data]

    @pre_load(pass_many=True)
    def convert_from_list(self, in_data, many, **kwargs):
        return [{"restriction": x} for x in in_data]


class ListingSchema(ma.ModelSchema):
    class Meta:
        model = Listing
        strict = True

    images = ma.Nested(ListingImageSchema, many=True)
    rooms = ma.Nested(RoomSchema, many=True)
    address = ma.Nested(AddressSchema)
    features = ma.Nested(FeatureSchema, many=True)
    amenities = ma.Nested(AmenitySchema, many=True)
    restrictions = ma.Nested(RestrictionSchema, many=True)

    @validates_schema
    def validate_listing(self, data, **kwargs):
        errors = {}

        if 'name' in data:
            if data['name'] == "":
                errors['name'] = "Please provide a title"

        if 'num_housemates' in data:
            if data['num_housemates'] < 0:
                errors['num_housemates'] = "Please provide the number of housemates"

        if 'num_vacancies' in data:
            if data['num_vacancies'] < 0:
                errors['num_vacancies'] = "Please provide the number of vacancies"

        if 'num_bedrooms' in data:
            if data['num_bedrooms'] < 0:
                errors['num_bedrooms'] = "Please provide the number of bedrooms"

        if 'landsize' in data:
            if data['landsize'] < 0:
                errors['landsize'] = "Please provide the landsize"

        if errors:
            raise ValidationError(errors)
