import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //  fix linkElement below to pass test with the current App.js code
  const h2Element = screen.getByText(/This weeks specials/i);
  // const linkElement = screen.getByText(/learn react/i);
  expect(h2Element).toBeInTheDocument();
});
