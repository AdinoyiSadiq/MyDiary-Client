import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signin from '../../views/Signin';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Signin />);
});


describe('Signin UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});