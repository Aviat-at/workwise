import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the Workwise headline and feature list', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /workwise/i })).toBeInTheDocument();
    expect(screen.getByText(/streamline workforce management/i)).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4);
  });
});
