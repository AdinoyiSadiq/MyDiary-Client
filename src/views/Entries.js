import React from 'react';
import Main from '../components/layout/Main';
import EntriesList from '../containers/EntriesList';

const Entries = (props) => (
  <div className="entriesContent">
    <Main {...props}>
      <EntriesList {...props} />
    </Main>
  </div>
);

export default Entries;