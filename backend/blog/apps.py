from django.apps import AppConfig # Register your models here.
class BlogConfig(AppConfig): # Configuration for the blog application
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'
