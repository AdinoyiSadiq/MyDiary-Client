import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EmptyListModal from '../../components/EmptyListModal';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<EmptyListModal />);
});


describe('EmptyListModal UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});