from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from accounts.serializer import CustomUserSerializer
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def home(request):
    return HttpResponse("Hii")

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        serializer = CustomUserSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({'message':'Failed to Sign-Up', 'error': serializer.errors}, status=400)
        serializer.save()
        return Response({'message':'Registered Successfully', 'data': serializer.data}, status=201)
    return Response({'error': 'Method Not Allowed'})