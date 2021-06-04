import { render, screen } from '@testing-library/react';
import App from './App';

test("renders title", async () => {
  render(<App />)
  const titleElement = screen.getByRole('heading');
  expect(titleElement.textContent).toBe("ReSTy");
})

