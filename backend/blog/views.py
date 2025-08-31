# ViewSet for managing blog posts with different access levels for public and staff users.
from rest_framework import viewsets, filters
from django.utils import timezone
from .models import Post
from .serializers import PostSerializer
from .permissions import IsAdminOrReadOnly

class PostViewSet(viewsets.ModelViewSet): # ViewSet for the Post model
    """
    Public: list/retrieve only published posts (publish_date <= now)
    Staff users: can list/create/update/delete all posts (including scheduled).
    """ 
    serializer_class = PostSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'content', 'author']
 
    def get_queryset(self): # Define the queryset based on user type
        qs = Post.objects.all().order_by('-publish_date', '-created_at')
        req = self.request
        # staff sees everything
        if req.user and req.user.is_staff:
            return qs
        # public - only published items
        return qs.filter(publish_date__lte=timezone.now())
