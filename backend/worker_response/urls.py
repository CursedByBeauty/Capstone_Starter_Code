from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.get_all_responses),
    path('users/', views.get_all_users),
    path('<int:pk>/', views.response_details)
]