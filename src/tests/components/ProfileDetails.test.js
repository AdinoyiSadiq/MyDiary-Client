import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProfileDetails from '../../components/ProfileDetails';

let wrapped;

const profile = {
  firstname: 'firstname',
  lastname: 'lastname',
  email: 'email',
  entryCount: 'entry count'
}

beforeEach(() => {
  wrapped = shallow(<ProfileDetails profile={profile} />);
});


describe('ProfileDetails UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});