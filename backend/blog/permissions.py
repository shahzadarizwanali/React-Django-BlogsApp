# Custom permission class to allow only staff users to edit posts
from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminOrReadOnly(BasePermission): # Custom permission class
    """
    Allow read-only (GET/HEAD/OPTIONS) for everyone.
    Allow write (POST/PUT/PATCH/DELETE) only for staff users.
    """ 
    def has_permission(self, request, view): # Check if the user has permission
        if request.method in SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff) # Only staff users can edit
