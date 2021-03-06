import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signup from '../../views/Signup';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Signup />);
});


describe('Signup UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});