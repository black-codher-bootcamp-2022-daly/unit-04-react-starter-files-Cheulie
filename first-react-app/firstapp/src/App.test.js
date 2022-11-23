import { render, screen } from '@testing-library/react';
import {App, Header } from './App';
import {NavBar} from ./NavBar
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the navbar", () => {
  render (<NavBar>
    <ul>
      <li>SuperLink 1</li>
      <li>SuperLink 2</li>
    </ul>
    <div>Whatever</div>
  </NavBar>);
    const result = screen.getByText(/SuperLink 1/)
    expect(result).toBeInTheDocument()

  })