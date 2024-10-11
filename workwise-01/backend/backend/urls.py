# backend/urls.py

from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),  # Example inclusion of another app's URLs
    path('api/', include('departments.urls')),
]