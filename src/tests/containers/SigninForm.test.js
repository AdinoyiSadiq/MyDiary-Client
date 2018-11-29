import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Signin from '../../containers/SigninForm';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <Signin />
      </MemoryRouter>
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('Signin UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });

    it('has two input fields and a button', () => {
      expect(wrapped.find('input').length).toEqual(2);
      expect(wrapped.find('button').length).toEqual(1);
    });
  });

  describe('when typing into fields', () => {
    beforeEach(() => {
      wrapped.find('input').first().simulate('change', { target: { id: 'email', value: 'user@email.com' } });
      wrapped.find('input').at(1).simulate('change', { target: { id: 'password', value: 'password' } });
      wrapped.update();
    });

    it('shows that text has been entered into then email field', () => {
      expect(wrapped.find('input').first().prop('value')).toEqual('user@email.com');
    });

    it('shows that text has been entered into then password field', () => {
      expect(wrapped.find('input').at(1).prop('value')).toEqual('password');
    });

    it('empties fields when form is submitted', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(wrapped.find('input').first().prop('value')).toEqual('');
      expect(wrapped.find('input').at(1).prop('value')).toEqual('');
    });
  });
});

describe('Signin client-side validation', () => {
  beforeEach(() => {
    wrapped.find('input').first().simulate('change', { target: { id: 'email', value: '' } });
    wrapped.find('input').at(1).simulate('change', { target: { id: 'password', value: '' } });
    wrapped.update();
  });

  it('shows error messages if both fields are empty', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('.authWrapper').first().find('.error').text()).toEqual('Please enter a valid email.');
    expect(wrapped.find('.authWrapper').at(1).find('.error').text()).toEqual('Please enter a valid password.');
  });
});