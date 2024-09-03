from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import product
from .serializer import ProductSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello Anees')


@api_view(['GET'])
def getProducts(request):
    return Response(products)

