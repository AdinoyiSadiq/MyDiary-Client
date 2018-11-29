import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UpdateEntry from '../../views/UpdateEntry';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<UpdateEntry />);
});


describe('UpdateEntry UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});