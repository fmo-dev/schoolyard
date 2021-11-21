import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';


test('renders learn react link', () => {
  render(<Menu />);
  const linkElement = screen.getByText(/GAMES/i);
  expect(linkElement).toBeInTheDocument();
});
