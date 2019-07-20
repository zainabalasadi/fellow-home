# backend/project/users/routes.py

from project import ma
from project.user.models import User

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email',  'gender', 'avatar', 'dob', 'verified')
