from django.urls import path, include # Import necessary functions for URL routing
from rest_framework.routers import DefaultRouter # Import DefaultRouter for viewset routing
from .views import PostViewSet # Import the PostViewSet
router = DefaultRouter() # Create a router and register our viewsets with it.
router.register(r'posts', PostViewSet, basename='post') # Register the PostViewSet with the router
urlpatterns = [ path('', include(router.urls)), ] # The API URLs are now determined automatically by the router.
