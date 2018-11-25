import React from 'react';
import Main from '../components/layout/Main';
import SingleEntry from '../containers/SingleEntry';

const Entry = (props) => (
  <div className="entryContent">
    <Main {...props}>
      <SingleEntry {...props} />
    </Main>
  </div>
);

export default Entry;