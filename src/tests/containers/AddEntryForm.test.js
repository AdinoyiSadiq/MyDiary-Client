import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import AddEntryForm from '../../containers/AddEntryForm';
import Root from '../../root';

let wrapped;
let wrapped1;

const type = 'update';
const match = { 
  params: { id: 2 } 
}

beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <AddEntryForm />
      </MemoryRouter>
    </Root>,
  );

  wrapped1 = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <AddEntryForm type={type} match={match} />
      </MemoryRouter>
    </Root>,
  );
});

afterEach(() => wrapped.unmount());
afterEach(() => wrapped1.unmount());

describe('Add Entry Form UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });

    test('container should render as expected when in update mode', () => {
      const tree = toJson(wrapped1);
      expect(tree).toMatchSnapshot();
    });

    it('has two input fields and a button', () => {
      expect(wrapped.find('input').length).toEqual(1);
      expect(wrapped.find('textarea').length).toEqual(1);
      expect(wrapped.find('button').length).toEqual(2);
    });
  });

  describe('when typing into fields', () => {
    beforeEach(() => {
      wrapped.find('input').first().simulate('change', { target: { id: 'title', value: 'title' } });
      wrapped.find('textarea').first().simulate('change', { target: { id: 'content', value: 'content' } });
      wrapped.update();
    });

    it('shows that text has been entered into the title field', () => {
      expect(wrapped.find('input').first().prop('value')).toEqual('title');
    });

    it('shows that text has been entered into the content field', () => {
      expect(wrapped.find('textarea').first().prop('value')).toEqual('content');
    });

    it('empties fields when form is submitted', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(wrapped.find('input').first().prop('value')).toEqual('');
      expect(wrapped.find('textarea').first().prop('value')).toEqual('');
    });
  });
});

describe('Add Entry Form client-side validation', () => {
  beforeEach(() => {
    wrapped.find('input').first().simulate('change', { target: { id: 'title', value: '' } });
    wrapped.find('textarea').first().simulate('change', { target: { id: 'content', value: '' } });
    wrapped.update();
  });

  it('shows error messages if both fields are empty', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('.entryError').at(1).text()).toEqual('Please enter a title');
    expect(wrapped.find('.entryError').at(2).text()).toEqual('Please enter some content');
  });
});