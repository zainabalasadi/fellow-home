# backend/project/models/message.py

from datetime import date, time

class Message():
	def __init__(self, h, m, s, msg, to_user, from_user):
		self._time_sent = time(h, m, s)
		self._msg = msg
		self._to_user = to_user
		self._from_user = from_user
		#self.to_user = User(get.to_user)
		#self.from_user = User(get.from_user)

	@property
	def time_sent(self):
		return self._time_sent
	
	@time_sent.setter
	def time_sent(self, h, m, s):
		self._time_sent = time(h, m, s)

	@property
	def msg(self):
		return self._msg

	@msg.setter
	def msg(self, var):
		self._msg = var

	@property
	def to_user(self):
		return self._to_user

	@to_user.setter
	def to_user(self, var):
		self._to_user = var

	@property
	def from_user(self):
		return self._from_user

	@from_user.setter
	def from_user(self, var):
		self._from_user = var
	
	

	