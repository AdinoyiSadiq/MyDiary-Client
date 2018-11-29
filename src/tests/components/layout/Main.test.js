import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Main from '../../../components/layout/Main';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Main />);
});


describe('Main UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});