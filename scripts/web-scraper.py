import requests
from bs4 import BeautifulSoup
import json
import sys

def flatten(lst):
    return [item for sublist in lst for item in (flatten(sublist) if isinstance(sublist, list) else [sublist])]
res,product_no = [], 1
type = sys.argv[1]
for i in range(1):
    url = f'https://fora.kz/catalog/{type}/?page=${i+1}'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    products= soup.find_all('div', class_='catalog-list-item')
    for product in products:
      image = product.find('div', class_='image')
      imgUrl = ''
      title = ''
      if image is not  None:
        img_tag = image.find('img')
        imgUrl = img_tag.get('src')
        title = img_tag.get('alt')
      price_tag = product.find('p', class_='price')
      price = ''
      if price_tag is not None:
            price =str(price_tag.text).strip()
      info = product.find_all('div', class_='item-info')
      details = []
      for i in info:
          ul = i.find('ul', class_='list-unstyled')
          ul_items = [li.text.strip() for li in ul.find_all('li')]
          
          details.append(ul_items)
      if title == "":
          continue
      else:
          data = {'id': str(product_no), 'title': title , 'url': imgUrl,'price' : price, 'details': flatten(details) }
          res.append(data)
          product_no +=1
json_value = json.dumps(res, ensure_ascii=False)
print(json_value)
