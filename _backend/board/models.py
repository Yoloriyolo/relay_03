from django.db import models

# Create your models here.
class PageInfo(models.Model):
    category = models.CharField(max_length=30)

class Post(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=125)
    content = models.CharField(max_length=125)
    author = models.IntegerField()
    pageInfo = models.ForeignKey(PageInfo, on_delete=models.CASCADE)
    class Meta:
        ordering = ['created']

class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    author = models.IntegerField()
    content = models.CharField(max_length=125)
