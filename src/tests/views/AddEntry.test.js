import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddEntry from '../../views/AddEntry';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<AddEntry />);
});


describe('AddEntry UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});