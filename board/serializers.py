from rest_framework import serializers
from board.models import *
import requests
from bs4 import BeautifulSoup

def isMalicious(value):
    url = "http://13.209.226.5/predict"
    res = requests.post(url, data={ 'message' : value })
    soup = BeautifulSoup(res.text, 'html.parser')
    text = str(soup.select('body > div.layerall > div > div > div:nth-child(1) > div.pred_message')[0])
    head = 'd">'
    tail = '</h5><b'
    if "It's toxic" in text:
        return True, text[text.index(head)+3:text.index(tail)]   
    return False, None

class PageInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageInfo
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def validate_content(self, data): # https://www.django-rest-framework.org/api-guide/serializers/#field-level-validation
        bad, filtered = isMalicious(data)
        if bad:
            raise serializers.ValidationError(f"본문에 욕설이 포함되어 있습니다.\n필터링 된 메시지: {filtered}")
        return data

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

    def validate_content(self, value):
        bad, filtered = isMalicious(value)
        if bad:
            raise serializers.ValidationError(f"댓글에 욕설이 포함되어 있습니다.\n필터링 된 메시지: {filtered}")
        return data        
