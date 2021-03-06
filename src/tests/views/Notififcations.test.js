import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Notifications from '../../views/Notifications';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Notifications />);
});


describe('Notifications UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});