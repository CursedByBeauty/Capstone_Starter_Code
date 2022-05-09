from django.urls import path
from . import views

urlpatterns = [
    path('',views.get_all_workorders),
    path('<int:pk>/', views.workorder_details),
    path('<int:pk>/status/', views.update_status)
]