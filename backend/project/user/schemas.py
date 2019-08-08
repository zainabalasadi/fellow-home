# backend/project/users/routes.py

from marshmallow import validates_schema, ValidationError

from project import ma
from project.user.models import User


class UserSchema(ma.ModelSchema):
    class Meta:
        model = User
        strict = True
        fields = ('id', 'first_name', 'last_name', 'email', 'password',
                  'gender', 'description', 'university', 'avatar', 'dob', 'verified')

    @validates_schema
    def validate_user(self, data, **kwargs):
        errors = []

        if 'email' in data:
            if data['email'] == "":
                errors.append("Please provide an email")
            elif "@" not in data['email']:
                errors.append("Please provide a valid email")

            if User.lookup(data['email']):
                errors.append("User with that email already exists")

        if 'password' in data:
            if data['password'] == "":
                errors.append("Please provide a password")
            elif len(data['password']) < 6:
                errors.append("Please provide a password of minimum 6 characters")

        if 'first_name' in data:
            if data['first_name'] == "":
                errors.append("Please provide a first name")
        if 'last_name' in data:
            if data['last_name'] == "":
                errors.append("Please provide a last name")

        if errors:
            raise ValidationError(errors)
