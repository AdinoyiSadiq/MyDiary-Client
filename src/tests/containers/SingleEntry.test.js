import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import SingleEntry from '../../containers/SingleEntry';
import Root from '../../root';

let wrapped;
let loading;

const match = { 
  params: { id: 2 } 
}

const mockState = { 
  singleEntry: {
    entry: {}
  },
};

beforeEach(() => {
  wrapped = mount(
    <Root initialState={mockState}>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <SingleEntry match={match} />
      </MemoryRouter>
    </Root>,
  );

  loading = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <SingleEntry match={match} />
      </MemoryRouter>
    </Root>,
  );
});

describe('Single Entry UI', () => {
  describe('render features', () => {
    test('container should render as expected when entry has been retrieved', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });

    test('container should render as expected when loading', () => {
      const tree = toJson(loading);
      expect(tree).toMatchSnapshot();
    });
  });
});  