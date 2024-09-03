from rest_framework import serializer
from django.contrib.auth.models import User
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model: Product
        fields: '__all__'