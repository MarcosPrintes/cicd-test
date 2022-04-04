/* eslint-disable testing-library/no-debugging-utils */
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';


Enzyme.configure({
  adapter: new EnzymeAdapter(),
})

test('renders without error', () => {
  const wrapper = shallow(<App />);

  const appComponent = wrapper.find("[data-test='component-app']");

  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {

});

test('renders couter display', () => {

});

test('counter display starts at 0', () => {

});

test('clicking button increments on display', () => {

});


