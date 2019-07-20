# backend/project/auth/models.py

from project import db

class TokenBlacklist(db.Model):
    __tablename__ = 'TokenBlacklist'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    token = db.Column(db.String(256))

    @classmethod
    def lookup(cls, token):
        return cls.query.filter_by(token=token).one_or_none()

    @classmethod
    def add(cls, token):
        db.session.add(TokenBlacklist(token=token))
        db.session.commit()
