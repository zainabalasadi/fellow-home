import bs4
import requests
import re
import time
import random
import json

def dl_listings():
    site = "https://flatmates.com.au"
    syd = f"{site}/rooms/sydney"

    listings = []
    for i in range(1, 126):
        req = requests.get(f"{syd}?page={i}")
        soup = bs4.BeautifulSoup(req.content, 'html.parser')
        print(f"downloading page {i}")

        for listing in soup.findAll('a', {'class': 'hero'}):
            ld = {}
            house = f"{site}{listing['href']}"

            house_req = requests.get(house)
            house_soup = bs4.BeautifulSoup(house_req.content, 'html.parser')

            data = house_soup.find('div', attrs={'data-react-class': 'Properties/PropertyListingV2'})
            info = json.loads(data.get('data-react-props'))
            listing_data = json.loads(info['listing'])
            ld['property_type'] = listing_data['property_type']
            for img in listing_data['images']:
                if 'images' not in ld:
                    ld['images'] = []
                ld['images'].append(img['url'])
            ld['date_published'] = listing_data['activated_at']
            ld['title'] = listing_data['listingTitle']
            ld['description'] = listing_data['property_description']
            ld['bedrooms'] = listing_data['keyFeatures']['bedroom_count']
            ld['bathrooms'] = listing_data['keyFeatures']['bathroom_count']
            ld['occupants'] = listing_data['keyFeatures']['occupant_count']
            ld['map_data'] = listing_data['map_data']
            ld['rooms'] = listing_data['roomsV2']

            listings.append(ld)


    with open('listings.json', 'w+') as f:
        json.dump(listings, f, indent=2)


def add_user_to_listings():
    with open('listings.json') as f:
        data = json.load(f)
        for listing in data:
            listing['user_id'] = random.randint(1, 1000)
    with open('listings.json', 'w+') as f:
        json.dump(data, f, indent=2)

def add_amenities_to_listings():
    with open('amenities') as f:
        amenities = [a.rstrip() for a in f.readlines()]
    with open('listings.json') as f:
        data = json.load(f)
        for listing in data:
            namenities = random.randint(0, 10)
            listing['amenities'] = list(set(random.choices(amenities, k=namenities)))
    with open('listings.json', 'w+') as f:
        json.dump(data, f, indent=2)

def add_random_data():
    with open('listings.json') as f:
        data = json.load(f)
        for listing in data:
            listing['vacancies'] = random.randint(1, listing["occupants"]) if listing["occupants"] else 0
            listing['landsize'] = random.random() * 1000
    with open('listings.json', 'w+') as f:
        json.dump(data, f, indent=2)
def add_empty_image():
    with open('listings.json') as f:
        data = json.load(f)
        for listing in data:
            if "images" not in listing:
                listing["images"] = []
    with open('listings.json', 'w+') as f:
        json.dump(data, f, indent=2)

def add_empty_date():
    with open('listings.json') as f:
        data = json.load(f)
        for listing in data:
            for room in listing["rooms"]:
                if room['attributes']['date_available'] is None:
                    room['attributes']['date_available'] = "2019-07-14"
    with open('listings.json', 'w+') as f:
        json.dump(data, f, indent=2)
add_empty_date()
