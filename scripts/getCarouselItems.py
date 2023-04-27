import requests
from bs4 import BeautifulSoup
import json

url= 'https://fora.kz'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
slider_cards = soup.findAll('div', class_='product-card')
res,card_no = [], 1
for card in slider_cards:
    img = card.find('img')
    url = img.get('src')
    title = img.get('alt')
    price = card.find('p', class_='product-card-price').text.strip()
    data = {'id': str(card_no), 'title' : title, 'url' : url, 'price': price}
    res.append(data)
    card_no+=1
json_value = json.dumps(res, ensure_ascii=False)
print(json_value)


