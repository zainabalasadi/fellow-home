# backend/project/review/schemas.py

from project import ma
from project.review.models import Review
from project.user.models import User
from project.user.schemas import UserSchema


class ReviewSchema(ma.ModelSchema):
    class Meta:
        model = Review
        strict = True

    user = ma.Function(lambda obj: 
                        UserSchema(exclude=['password']).dump(User.query.get(obj.reviewer_id)).data)
