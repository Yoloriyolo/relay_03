from django.urls import path
from . import views

urlpatterns = [
    path('comment/delete/<int:comment_id>/', views.comment_delete, name='comment_delete'),
    path('detail/<int:post_id>/comment/', views.comment_list, name='comment_list'),
    path('detail/<int:post_id>/', views.detail, name='detail'),
    path('<int:pageInfo_id>/', views.index, name='index'),
]
