# backend/blogsite/middleware.py
import traceback
from django.http import JsonResponse
from django.conf import settings

class APICatchMiddleware: # Middleware to catch uncaught exceptions in API views
    """
    Catch uncaught exceptions for API paths and return JSON instead of HTML 500.
    Only used in DEBUG or for API endpoints.
    """
    def __init__(self, get_response): # Initialize the middleware with the next layer
        self.get_response = get_response

    def __call__(self, request): # Process the request and catch exceptions
        try:
            return self.get_response(request)
        except Exception as exc:
            # Only return JSON for API endpoints
            if request.path.startswith('/api/'):
                if settings.DEBUG:
                    return JsonResponse({
                        "error": True,
                        "detail": str(exc),
                        "trace": traceback.format_exc()
                    }, status=500)
                return JsonResponse({"error": True, "detail": "Internal server error"}, status=500)
            # Re-raise for non-api requests so Django default error page shows
            raise
