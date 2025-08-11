from django.contrib import admin
from django.urls import path, include
from accounts.views import *

urlpatterns = [
    path('', home, name="Home"),
    path('signup/', signup, name='signup')
]