# blog/tests/test_models.py
from django.test import TestCase
from django.utils import timezone
from datetime import timedelta
from blog.models import Post

class PostModelTest(TestCase):
    def test_is_published_true_for_now(self):
        p = Post.objects.create(title="t", content="c", publish_date=timezone.now())
        self.assertTrue(p.is_published)

    def test_is_published_false_for_future(self):
        p = Post.objects.create(title="future", content="c", publish_date=timezone.now() + timedelta(days=2))
        self.assertFalse(p.is_published)
