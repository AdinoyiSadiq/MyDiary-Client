import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Entries from '../../views/Entries';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Entries />);
});

describe('Entries UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});