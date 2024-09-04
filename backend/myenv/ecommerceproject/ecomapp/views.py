from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from .products import products
from .models import Product
from .serializer import ProductSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello Anees')


@api_view(['GET'])
def getProducts(request):
    products=Product.objects.all()
    serializer=ProductSerializer(products, many=True)
    return Response(serializer.data)

