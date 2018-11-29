import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Entry from '../../views/Entry';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Entry />);
});

describe('Entry UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});