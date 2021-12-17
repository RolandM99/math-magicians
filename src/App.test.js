import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Calculator from './pages/Calculator';
import Quote from './pages/Quotes';
import Home from './pages/Home';

test('Checking of the sentence Math Magician', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magician/i);
  expect(linkElement).toMatchSnapshot();
});
test('change screen when we click in the navbar on Calculator', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('change screen when we click in the navbar on Quotes', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('change screen when we click in the navbar on Home', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
