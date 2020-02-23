
from django.contrib import admin
from django.urls import path
from char_count.views import char_count

urlpatterns = [
    path('admin/', admin.site.urls),
    path('char_count', char_count, name='char_count'),
]
