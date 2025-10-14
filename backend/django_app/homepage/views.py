from django.http import JsonResponse

PROJECT_SUMMARY = {
    "name": "Workwise",
    "tagline": "Streamlined workforce management for modern teams.",
    "description": (
        "Workwise combines scheduling, collaboration, and analytics tools "
        "so teams can stay aligned in one workspace."
    ),
    "links": {
        "frontend": "http://localhost:3000",
        "backend": "http://localhost:8000",
        "documentation": "https://example.com/docs/workwise",
    },
}


def home(request):
    """Return a structured summary of the Workwise platform."""
    return JsonResponse(PROJECT_SUMMARY)
