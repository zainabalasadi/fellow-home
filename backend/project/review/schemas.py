# backend/project/review/schemas.py

from project import ma
from project.review.models import Review


class ReviewSchema(ma.ModelSchema):
    class Meta:
        model = Review
        strict = True
