import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WelcomeModal from '../../components/WelcomeModal';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<WelcomeModal />);
});

describe('WelcomeModal UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});