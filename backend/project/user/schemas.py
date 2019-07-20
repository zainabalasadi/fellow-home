# backend/project/users/routes.py

from project import ma
from project.user.models import User

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 
                  'first_name', 
                  'last_name', 
                  'email', 
                  'gender', 
                  'avatar',
                  'dob',
                  'verified')
