from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.get_all_responses),
    path('<int:pk>/', views.response_details)
]