# tests/test_models.py

from project.models.room import Room
from project.models.user import User
from project.models.address import Address
from project.models.message import Message
from project.models.review import Review
from project.models.listing import Listing
from project.models.feature import Feature
from datetime import date, time

def test_room():
	r1 = Room("private", 100, True, "6-6-2019",3)
	assert(r1.cost == 100)
	assert(r1.min_stay == 3)
	r1.cost = 50
	assert(r1.cost == 50)
	r1.min_stay = 4
	assert(r1.min_stay == 4)
	r1.roomType = "shared"
	assert(r1.roomType == "shared")

def test_address():
	a1 = Address(1, "George", "Sydney", 2000)
	assert(a1.unitNum == 1)
	a1.unitNum = 0
	assert(a1.unitNum == 0)
	assert(a1.name == "George")
	assert(a1.postcode == 2000)

def test_review():
	r1 = Review("Review", "hm this is a paragraph", 3, "reviewed", "reviewing")
	assert(r1.title == "Review")
	assert(r1.rating == 3)
	r1.content = "is great"
	assert(r1.content == "is great")
	# r1.addImage("1.url")
	# r1.addImage("2.url")
	# assert(len(r1.image) == 2)

def test_listing():
	a1 = Address(1, "George", "Sydney", 2000)
	r1 = Room("private", 100, True, "6-6-2019",3)
	r2 = Room("private", 100, True, "6-6-2019",3)
	l1 = Listing("village", "2-2-2019", 2, 1)
	# l1.addRoom(r1)
	# l1.addRoom(r2)
	# assert(len(l1.room) == 2)
	# l1.deleteRoom(r1)
	# assert(len(l1.room) == 1)

def test_feature():
	f1 = Feature(1, 1, "garage", True, 5.5)
	assert(len(f1.amenities) == 0)
	f1.addAmenities("aircon")
	assert(len(f1.amenities) == 1)
	assert(f1.num_bathroom == 1)
	assert(f1.garden == True)

# def test_system():
# 	s1 = System()
# 	u1 = User("a@gmail.com", "pass1")
# 	a1 = Address(1, "George", "Sydney", 2000)
# 	r1 = Room("private", 100, True, 2019, 8,10,3)
# 	l1 = Listing("village", True, a1, None, 2, 1)
# 	l1.addRoom(r1)
# 	u1.addListing(l1)
# 	s1.addAllListing(u1)
# 	assert(len(allListings) == 1)
# 	u2 = User("b@gmail.com", "pass2")
# 	a2 = Address(11, "Georgee", "Sydneyy", 2000)
# 	r2 = Room("private", 100, True, 2019, 8,10,3)
# 	l2 = Listing("villages", True, a1, None, 2, 1)
# 	l2.addRoom(r2)
# 	u2.addListing(l2)
# 	s1.addAllListing(u2)
# 	assert(len(allListings) == 2)
	