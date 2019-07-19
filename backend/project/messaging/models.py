# backend/project/messaging/models.py

from datetime import date, time

class Message():
    def __init__(self, h, m, s, msg, to_user, from_user):
        self.time_sent = time(h, m, s)
        self.msg = msg
        self.to_user = to_user
        self.from_user = from_user
        #self.to_user = User(get.to_user)
        #self.from_user = User(get.from_user)

    @property
    def time_sent(self):
        return self.time_sent
    
    @time_sent.setter
    def time_sent(self, h, m, s):
        self.time_sent = time(h, m, s)

    @property
    def msg(self):
        return self.msg

    @msg.setter
    def msg(self, var):
        self.msg = var

    @property
    def to_user(self):
        return self.to_user

    @to_user.setter
    def to_user(self, var):
        self.to_user = var

    @property
    def from_user(self):
        return self.from_user

    @from_user.setter
    def from_user(self, var):
        self.from_user = var
