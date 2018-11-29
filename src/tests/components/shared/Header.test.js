import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../../components/shared/Header';

let wrapped;

const match = {
  path: '/main/signin'
}

beforeEach(() => {
  wrapped = shallow(<Header match={match} />);
});


describe('Header UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});