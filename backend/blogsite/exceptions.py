# backend/blogsite/exceptions.py
from rest_framework.views import exception_handler
from rest_framework.response import Response

def custom_exception_handler(exc, context): # Custom exception handler for DRF
    """
    Wrap DRF default exception handler and produce a uniform JSON structure for API errors.
    """
    response = exception_handler(exc, context) # Call REST framework's default exception handler first
    if response is not None:
        # Keep DRF response details but wrap inside 'error' structure.
        return Response({
            "error": True,
            "status_code": response.status_code,
            "detail": response.data
        }, status=response.status_code)
    # If response is None, let middleware handle or return a generic 500 if this is an API request.
    return response
