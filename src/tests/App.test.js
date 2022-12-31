import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Coding Miles text', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Coding Miles/i)[0];
  expect(linkElement).toBeInTheDocument();
});

test('renders the tagline text', () => {
  render(<App />);
  const linkElement = screen.getByText(/A place to share your learning journey./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the Home link text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the Sign up link text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the Sign in link text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign up/i);
  expect(linkElement).toBeInTheDocument();
});