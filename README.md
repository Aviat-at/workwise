# Workwise

Workwise is a full-stack project using Django (backend) and React (frontend) with Docker for containerization.

## Tech Stack
- Backend: Python 3.12, Django 4.2.9, DRF
- Frontend: React 18, Node 20
- Database: PostgreSQL 16
- Containerization: Docker & Docker Compose

## Local Setup

### Backend
```bash
cd backend/django_app
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
