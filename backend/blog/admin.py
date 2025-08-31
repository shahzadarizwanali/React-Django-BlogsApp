from django.contrib import admin # Register your models here.
from .models import Post # Import the Post model

@admin.register(Post)  # Register the Post model with the admin site
class PostAdmin(admin.ModelAdmin): # Customize the admin interface for the Post model
    list_display = ('id', 'title', 'author', 'publish_date', 'is_published_display', 'created_at')
    list_display_links = ('title',)
    search_fields = ('title', 'content', 'author')
    list_filter = ('publish_date', 'created_at')
    readonly_fields = ()

    def is_published_display(self, obj): # Custom method to display publication status
        return obj.is_published
    is_published_display.boolean = True
    is_published_display.short_description = 'Published'

    class Media: # Include custom JavaScript for live search functionality
        js = ('admin/js/live_search.js',)
