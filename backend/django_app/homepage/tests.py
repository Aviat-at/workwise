from django.test import TestCase
from django.urls import reverse


class HomepageViewTests(TestCase):
    def test_homepage_returns_project_summary(self):
        response = self.client.get(reverse("home"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response["content-type"], "application/json")

        payload = response.json()
        self.assertEqual(payload["name"], "Workwise")
        self.assertIn("tagline", payload)
        self.assertIn("frontend", payload["links"])
