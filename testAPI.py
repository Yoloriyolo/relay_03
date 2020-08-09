import requests
from bs4 import BeautifulSoup


# url = "http://www.matmul.net/purifier"
url = "http://www.matmul.net/predict"

res = requests.post(url, data={ 'message' : "안녕, 병신아!" })
html = res.text
soup = BeautifulSoup(html, 'html.parser')

print(
    soup.select('body > div.layerall > div > div > div:nth-child(1) > div.pred_message')[0]
)
