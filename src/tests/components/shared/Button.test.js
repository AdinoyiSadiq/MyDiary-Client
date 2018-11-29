import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../../../components/shared/Button';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Button />);
});

describe('Button UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});