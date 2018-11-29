import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});
afterEach(() => wrapped.unmount());

describe('App UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});



