import './App.css';

const FEATURES = [
  {
    title: 'Smart Scheduling',
    body: 'Coordinate shifts, meetings, and deadlines with calendar-aware automations.',
  },
  {
    title: 'Team Collaboration',
    body: 'Centralise announcements, documents, and tasks so everyone stays aligned.',
  },
  {
    title: 'Operational Insights',
    body: 'Dashboards surface utilisation and staffing trends to support quick decisions.',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-hero">
        <p className="App-label">Workforce Platform</p>
        <h1>Workwise</h1>
        <p className="App-tagline">
          Streamline workforce management with integrated planning, collaboration, and analytics tools.
        </p>
        <div className="App-actions">
          <a className="App-button" href="http://localhost:8000" rel="noreferrer">
            View API summary
          </a>
          <a className="App-link" href="https://example.com/docs/workwise" rel="noreferrer">
            Explore documentation
          </a>
        </div>
      </header>

      <main className="App-content">
        <section className="Feature-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="Feature-card">
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
            </article>
          ))}
        </section>

        <section className="App-cta">
          <h2>Get started locally</h2>
          <ol>
            <li>Run the Django backend: <code>python manage.py runserver</code></li>
            <li>Start the React app: <code>npm start</code></li>
            <li>Sign in to explore scheduling, collaboration, and reporting tools.</li>
          </ol>
        </section>
      </main>

      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Workwise. Built for high-performing teams.</p>
      </footer>
    </div>
  );
}

export default App;
