import { render, RenderResult, screen } from '@testing-library/react';
import App from './App';

describe('renders app component', () => {
  let component: RenderResult;

  beforeEach(() => component = render(<App />));

  describe('dark mode component', () => {
    it("should display dark mode component", () => {
      const darkModeComponent = screen.getByText(/Dark Mode/i);
      expect(darkModeComponent).toBeInTheDocument();
    })

    describe('test current mode', () => {
      let element: Element | null;
      beforeEach(() => element = component.container.querySelector('#schoolyard'));

      it("should have light_mode class", () => {
        expect(element?.className.includes('light_mode')).toBe(true);
        expect(element?.className.includes('dark_mode')).toBe(false);
      })
    })

  })
});
