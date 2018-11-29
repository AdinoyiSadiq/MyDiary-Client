import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Auth from '../../../components/layout/Auth';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Auth />);
});


describe('Auth UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});