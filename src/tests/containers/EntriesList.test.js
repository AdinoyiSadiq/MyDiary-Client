import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import EntriesList from '../../containers/EntriesList';
import Root from '../../root';

let noEntries;
let withEntries;

const mockState = { 
  entriesList: [{
    created: 1543484351357
  }],
};


beforeEach(() => {
  noEntries = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <EntriesList />
      </MemoryRouter>
    </Root>,
  );

  withEntries = mount(
    <Root initialState={mockState}>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <EntriesList />
      </MemoryRouter>
    </Root>,
  );
});

afterEach(() => noEntries.unmount());
afterEach(() => withEntries.unmount());

describe('EntriesList UI', () => {
  describe('render features', () => {
    test('container should render as expected when there are no entries', () => {
      const tree = toJson(noEntries);
      expect(tree).toMatchSnapshot();
    });

    test('container should render as expected when there are entries', () => {
      const tree = toJson(withEntries);
      expect(tree).toMatchSnapshot();
    });
  });
});