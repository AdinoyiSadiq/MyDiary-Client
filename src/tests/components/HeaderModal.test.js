import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Root from '../../root';
import HeaderModal from '../../components/HeaderModal';

let wrapped;
let wrapped1;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <HeaderModal />
      </MemoryRouter>
    </Root>,
  );
  wrapped1 = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <HeaderModal showModal={true} />
      </MemoryRouter>
    </Root>,
  );
});

afterEach(() => wrapped.unmount());


describe('HeaderModal UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
    test('view should render as expected when showModal class is used', () => {
      const tree = toJson(wrapped1);
      expect(tree).toMatchSnapshot();
    });
  });
});