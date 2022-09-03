from django.contrib import admin

# Register your models here.

# from shop import models
from .models import *

class CategoryAdmin(admin.ModelAdmin):
    list_display= ("name","image","description")

# admin.site.register(Category)
admin.site.register(Category,CategoryAdmin)
admin.site.register(Product)
