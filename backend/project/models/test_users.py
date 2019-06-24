# backend/project/models/test_users.py

import user
import pytest

u1 = User("BruceWayne", "Batman101")

def test_username():
	assert(u1.usernane == "BruceWayne")

#not working as it traces to user -> project -> db where project is not a module name