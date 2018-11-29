import React from 'react';
import Main from '../components/layout/Main';
import AddEntryForm from '../containers/AddEntryForm';

const UpdateEntry = (props) => (
  <div className="addEntryContent">
    <Main {...props}>
      <AddEntryForm {...props} type="update" />
    </Main>
  </div>
);

export default UpdateEntry;