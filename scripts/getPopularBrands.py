import requests
from bs4 import BeautifulSoup
import json
import sys
res  = []  
type = sys.argv[1]
for i in range(1):
    url = f'https://fora.kz/catalog/{type}/?page=${i+1}'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    brands=soup.find_all('div', class_='brand')
    imgBrands=[]
    for brand in brands:
        img=brand.find('img')['src']
        imgBrands.append(img)
    data = {"brands": imgBrands}
    res.append(data)
json_value = json.dumps(res, ensure_ascii=False)
print(json_value)
