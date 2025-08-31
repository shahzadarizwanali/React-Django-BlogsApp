import os, sys # noqa: E402 isort:skip 
if __name__ == "__main__": # noqa: E402 isort:skip
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "blogsite.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError("Couldn't import Django") from exc
    execute_from_command_line(sys.argv)
