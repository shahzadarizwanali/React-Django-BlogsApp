# blog/tests/test_api.py
from django.utils import timezone
from datetime import timedelta
from rest_framework.test import APITestCase, APIClient
from django.contrib.auth.models import User
from blog.models import Post

class PostAPITest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        now = timezone.now()

        # Posts
        self.published = Post.objects.create(title="pub", content="pub body", publish_date=now)
        self.scheduled = Post.objects.create(title="sch", content="sch body", publish_date=now + timedelta(days=5))

        # Users
        self.staff = User.objects.create_user(username="staff", email="staff@example.com", password="pass")
        self.staff.is_staff = True
        self.staff.save()
        self.normal = User.objects.create_user(username="normal", password="pass")

        # URLs
        self.list_url = "/api/posts/"
        self.detail_url = f"/api/posts/{self.published.id}/"

    # --- Basic API Tests ---
    def test_public_list_shows_only_published(self):
        res = self.client.get(self.list_url)
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]["id"], self.published.id)

    def test_staff_can_see_scheduled(self):
        self.client.force_authenticate(user=self.staff)
        res = self.client.get(self.list_url)
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertEqual(len(data), 2)

    def test_non_staff_cannot_create(self):
        self.client.force_authenticate(user=self.normal)
        payload = {"title": "x", "content": "y", "publish_date": timezone.now().isoformat()}
        res = self.client.post(self.list_url, payload, format="json")
        self.assertEqual(res.status_code, 403)

    def test_staff_can_create(self):
        self.client.force_authenticate(user=self.staff)
        payload = {"title": "new", "content": "body", "publish_date": timezone.now().isoformat()}
        res = self.client.post(self.list_url, payload, format="json")
        self.assertEqual(res.status_code, 201)
        self.assertEqual(res.json()["title"], "new")

    # --- Advanced Error Handling Tests ---
    def test_create_post_invalid_data(self):
        """Validation error: empty title should return 400"""
        self.client.force_authenticate(user=self.staff)
        payload = {"title": "", "content": ""}  # invalid data
        res = self.client.post(self.list_url, payload, format="json")
        self.assertEqual(res.status_code, 400)
        self.assertIn("title", res.json()["detail"])   # fixed
        self.assertIn("content", res.json()["detail"]) # optional extra check


    def test_get_nonexistent_post_returns_404(self):
        """Accessing non-existent post returns 404"""
        res = self.client.get("/api/posts/99999/")
        self.assertEqual(res.status_code, 404)

    def test_update_nonexistent_post_returns_404(self):
        """Updating non-existent post returns 404"""
        self.client.force_authenticate(user=self.staff)
        payload = {"title": "Updated", "content": "Updated body"}
        res = self.client.put("/api/posts/99999/", payload, format="json")
        self.assertEqual(res.status_code, 404)
