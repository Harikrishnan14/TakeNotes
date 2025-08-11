from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from uuid import uuid4
from accounts.manager import CustomUserManager

# Create your models here.
class CustomUser(AbstractBaseUser):
    user_id = models.CharField(max_length=255, primary_key=True, default=uuid4, db_index=True, unique=True, editable=False, null=False,blank=False)
    user_name = models.CharField(max_length=255, null=True, blank=True)
    user_email = models.EmailField(unique=True, blank=True, null=True)
    create_on = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True, db_index=True)
    last_update =  models.DateTimeField(auto_now=True, editable=False, null=True, blank=True, db_index=True)

    USERNAME_FIELD = 'user_email'
    REQUIRED_FIELDS = []

    def _str_(self):
        return self.email
    
    objects = CustomUserManager()