from email.policy import default
from django.db import models
import datetime
import os
# Create your models here.

def getFileName(request,filename):
    nowTime=datetime.now().strftime("%Y%m%d%H:%M:S")
    newFilename=f"{nowTime}{filename}"
    return os.path.join('uploads/',newFilename)
class Category(models.Model):
    # NOTE : primary key automatically generator
    name=models.CharField(max_length=150,null=False,blank=False)
    image=models.ImageField(upload_to=getFileName,null=True,blank=True)
    description=models.TextField(max_length=500,null=False,blank=False)
    status=models.BooleanField(default=False,help_text="0-Show,1-Hidden")
    created_at=models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.name



class Product(models.Model):
    # Create foreign key
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    name=models.CharField(max_length=150,null=False,blank=False)
    vendor=models.CharField(max_length=150,null=False,blank=False)
    product_image=models.ImageField(upload_to=getFileName,null=True,blank=True)
    quantity=models.IntegerField(null=False,blank=False)
    original_price=models.FloatField(null=False,blank=False)
    selling_price=models.FloatField(null=False,blank=False)
    description=models.TextField(max_length=500,null=False,blank=False)
    status=models.BooleanField(default=False,help_text="0-Show,1-Hidden")
    trending=models.BooleanField(default=False,help_text="0-default,1-Trending")
    created_at=models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.name
