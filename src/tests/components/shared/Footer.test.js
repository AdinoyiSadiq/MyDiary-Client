import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../../components/shared/Footer';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Footer />);
});


describe('Footer UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});