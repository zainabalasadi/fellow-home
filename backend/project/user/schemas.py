# backend/project/users/routes.py

from datetime import datetime
from marshmallow import pre_load, validates_schema, ValidationError

from project import ma
from project.user.models import User

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User
        strict = True
        fields = ('id', 'first_name', 'last_name', 'email', 'password', 
                  'gender', 'avatar', 'dob', 'verified')

    @pre_load
    def convert_string_to_datetime(self, in_data, **kwargs):
        in_data['dob'] = str(datetime.strptime(in_data['dob'], "%d/%m/%Y"))
        return in_data

    @validates_schema
    def validate_email(self, data, **kwargs):
        errors = {}

        if "@" not in data['email']:
            errors['email'] = "Please provide a valid email"
        if data['email'] == "":
            errors['email'] = "Please provide an email"

        if User.lookup(data['email']):
            errors['email'] = "User with that email already exists"

        if data['password'] == "":
            errors['password'] = "Please provide a password"
        if len(data['password']) < 6:
            errors['password'] = "Please provide a password of minimum 6 characters"

        if data['first_name'] == "":
            errors['first_name'] = "Please provide a first name"
        if data['last_name'] == "":
            errors['last_name'] = "Please provide a last name"

        if errors:
            raise ValidationError(errors)
