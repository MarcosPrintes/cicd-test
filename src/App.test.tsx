/* eslint-disable testing-library/no-debugging-utils */
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';


Enzyme.configure({
  adapter: new EnzymeAdapter(),
})


const setup = () => shallow(<App />);

const findByText = (wrapper:Enzyme.ShallowWrapper, value: string) => ""

const wrapper = shallow(<App />);

test('renders without error', () => {

  const appComponent = wrapper.find("[data-test='component-app']");

  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {

  const buttonComponent = wrapper.find("[data-test='increment-button']");

  expect(buttonComponent.length).toBe(1);
});

test('renders couter display', () => {

  const componentDisplay = wrapper.find("[data-test='counter-display']");

  expect(componentDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {

});

test('clicking button increments on display', () => {

});


