from ecomapp import views
from django.urls import path

urlpatterns = [
    path('', views.getRoute, name="getRoutes")
]
