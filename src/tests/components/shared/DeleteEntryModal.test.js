import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeleteEntryModal from '../../../components/shared/DeleteEntryModal';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<DeleteEntryModal />);
});

describe('DeleteEntryModal UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});