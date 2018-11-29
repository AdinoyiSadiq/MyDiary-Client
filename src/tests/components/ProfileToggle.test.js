import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProfileToggle from '../../components/ProfileToggle';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ProfileToggle />);
});


describe('ProfileToggle UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});