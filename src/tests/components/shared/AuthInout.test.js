import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AuthInput from '../../../components/shared/AuthInput';

let wrapped;

const touched = {
  name: 'name'
}

beforeEach(() => {
  wrapped = shallow(<AuthInput touched={touched} />);
});


describe('AuthInput UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});