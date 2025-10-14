# Workwise

Workwise is a full-stack productivity platform built with a Django REST backend and a React front-end. The project is containerised with Docker so you can run the entire stack locally with a single command or work on each service independently.

## Tech Stack
- **Backend:** Python 3.12, Django 5, Django REST Framework, Gunicorn
- **Frontend:** React 18 with Create React App
- **Database:** PostgreSQL 16
- **Containerisation:** Docker & Docker Compose

## Local Development

### Backend (Django)
```bash
cd backend/django_app
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
The backend is available at [http://localhost:8000](http://localhost:8000) and exposes a project summary at `/`.

### Frontend (React)
```bash
cd frontend/react_app
npm install
npm start
```
The React development server runs at [http://localhost:3000](http://localhost:3000) and proxies API calls to the backend when configured.

### Docker (Full stack)
```bash
docker compose -f docker-compose.dev.yml up --build
```
This command starts the backend, frontend, and PostgreSQL database together.

## Environment Variables
Create `.env.dev` and `.env.prod` files at the repository root when using Docker. They should include values similar to the following:

| Variable | Description |
| --- | --- |
| `POSTGRES_DB` | Database name for PostgreSQL |
| `POSTGRES_USER` | Username for PostgreSQL |
| `POSTGRES_PASSWORD` | Password for PostgreSQL |
| `DJANGO_SECRET_KEY` | Secret key for Django production deployments |

## Project Structure
```
workwise/
├── backend/         # Django project
├── frontend/        # React application
├── docker-compose.* # Docker compose files for dev/prod
└── README.md
```

## Testing
- Backend: `cd backend/django_app && python manage.py test`
- Frontend: `cd frontend/react_app && npm test`

Contributions and improvements are welcome! Please open an issue or submit a pull request with your ideas.
