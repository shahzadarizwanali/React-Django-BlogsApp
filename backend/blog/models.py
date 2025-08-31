from django.db import models
from django.utils import timezone

class Post(models.Model): # Model representing a blog post
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.CharField(max_length=120, blank=True)
    image = models.ImageField(upload_to='post_images/', blank=True, null=True)

    # Auto timestamp for creation
    created_at = models.DateTimeField(auto_now_add=True)

    # Editable publish_date (can schedule). 
    # Default = now (so if you don't set, it publishes immediately)
    publish_date = models.DateTimeField(default=timezone.now, blank=True, null=True)

    def __str__(self): # String representation of the Post model
        return self.title

    @property  
    def is_published(self): # Check if the post is published based on publish_date
        return self.publish_date and self.publish_date <= timezone.now()
