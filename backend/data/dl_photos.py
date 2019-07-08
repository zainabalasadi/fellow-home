import bs4
import requests
import json
import re

def dl_images():
    with open('image_links', 'w+') as f:
        site = 'https://www.pexels.com/search/people/'
        for i in range(35):
            req = requests.get(f'{site}?page={i}')
            soup = bs4.BeautifulSoup(req.content, 'html.parser')
            for row in soup.findAll('a', {'class': 'js-photo-link photo-item__link'}):
                image = row.find('img')['src']
                f.write(f'{image}\n')

#dl_images()
images = []
with open('image_links') as f:
    for line in f.readlines():
        image =  re.sub(r'\?.*', r'', line).rstrip()
        images.append(image)

with open('people.json') as f:
    data = json.load(f)
    for person in data:
        image = images.pop()
        person['avatar'] = image
    with open('poeple.json', 'w+') as f:
        json.dump(data, f, indent=2)
