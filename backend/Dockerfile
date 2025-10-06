# Stage 1: Builder
FROM python:3.12-slim AS builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libpq-dev curl \
 && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY backend/django_app/requirements.txt /app/
RUN pip install --prefix=/install --no-cache-dir -r requirements.txt

# Copy project & shared libs
COPY backend/django_app /app
COPY common_libs /app/common_libs

# Stage 2: Production
FROM python:3.12-slim

WORKDIR /app

COPY --from=builder /install /usr/local
COPY --from=builder /app /app

# Create non-root user
RUN adduser --disabled-password --gecos "" django
USER django

# Expose port
EXPOSE 8000

# Run Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi:application", "--workers", "3", "--threads", "2", "--timeout", "120"]
