import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// const server = setupServer(
//   rest.get('http://test.com', (req, res, ctx) => {
//     let data = {
//       count: 1,
//       results: {
//         text: 'testing'
//       }
//     }
//     return res(ctx.json(data));
//   })
// )

// beforeAll(() => { server.listen() })

// afterEach(() => { server.resetHandlers() })

// afterAll(() => { server.close() });

test("renders title", async () => {
  render(<App />)
  const titleElement = screen.getByRole('heading');
  expect(titleElement.textContent).toBe("ReSTy");
})

// test("can fetch data", async () => {
//   render(<App />);

//   const home = screen.getByTestId("home");
//   fireEvent.click(home);

//   const form = screen.getByTestId("urlForm");
//   const url = screen.getByTestId("url");
//   const radioGet = screen.getByTestId("get")

//   // make the fake event in the url field
//   fireEvent.change(url, { target: { name: 'url', value: 'http://test.com' } })
//   fireEvent.click(radioGet, { target: { name: 'method', value: 'get' } })
//   fireEvent.submit(form);

//   await waitFor(() => {
//     expect(screen.getByTestId('method')).toHaveTextContent('Method: get');
//     expect(screen.getByTestId('json')).toHaveTextContent('testing');
//   })
// })
