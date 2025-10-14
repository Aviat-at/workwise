# Workwise Frontend

This React application provides the Workwise web experience. It surfaces the platform overview, feature highlights, and quick-start instructions for running the full stack locally.

## Available Scripts

Inside `frontend/react_app` you can run:

- `npm start` – starts the development server on [http://localhost:3000](http://localhost:3000).
- `npm test` – runs the component tests with Jest and React Testing Library.
- `npm run build` – bundles the app for production deployment.

## Connecting to the Backend
The landing page links to the Django API, which exposes a JSON project summary at [http://localhost:8000](http://localhost:8000). Update the URLs in `src/App.js` if your backend runs elsewhere.

## Styling
Component styles live in `src/App.css`. The current design focuses on a clean marketing-style layout that introduces the Workwise feature set.

## Testing
Tests are located in `src/App.test.js` and verify that the key Workwise messaging and feature cards render correctly.
