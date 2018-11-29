import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Profile from '../../views/Profile';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Profile />);
});


describe('Profile UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});