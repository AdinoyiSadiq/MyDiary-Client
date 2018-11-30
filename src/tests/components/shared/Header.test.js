import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from '../../../containers/Header';

let wrapped;

const match = {
  path: '/main/signin'
}

const profile = {
  firstname: 'firstname'
}

const getUserProfile = jest.fn();

beforeEach(() => {
  wrapped = shallow(<Header match={match} profile={profile} getUserProfile={getUserProfile} />);
});


describe('Header UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});