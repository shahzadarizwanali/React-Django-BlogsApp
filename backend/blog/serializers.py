# Serializers for the Post model, including validation for images and publish dates.
import datetime
from django.utils import timezone
from rest_framework import serializers
from .models import Post

MAX_IMAGE_SIZE = 2 * 1024 * 1024  # 2 MB

class PostSerializer(serializers.ModelSerializer): # Serializer for the Post model
    image_url = serializers.SerializerMethodField(read_only=True) # To get full URL of the image
 
    class Meta: # Meta class to define model and fields
        model = Post
        fields = ['id', 'title', 'content', 'author', 'image', 'image_url', 'publish_date', 'created_at']
        read_only_fields = ['created_at']

    def get_image_url(self, obj): # Method to get full URL of the image
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None

    def validate_title(self, value): # Validate that title is not blank
        if not value or not value.strip():
            raise serializers.ValidationError("Title cannot be blank.")
        return value
 
    def validate_image(self, value): # Validate image size and type
        if value:
            # size check
            if hasattr(value, 'size') and value.size > MAX_IMAGE_SIZE:
                raise serializers.ValidationError("Image file is too large (max 2 MB).")
            # content type check (Simple)
            content_type = getattr(value, 'content_type', '')
            if content_type and not content_type.startswith('image/'):
                raise serializers.ValidationError("Uploaded file is not an image.")
        return value

    def validate_publish_date(self, value):     # Validate publish_date is not absurdly far in the past
        if value:
            # avoid absurdly far past dates (basic sanity)
            try:
                if value < timezone.now() - datetime.timedelta(days=365*50):
                    raise serializers.ValidationError("Publish date looks invalid.")
            except Exception:
                pass
        return value
