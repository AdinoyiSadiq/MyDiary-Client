import React from 'react';
import Main from '../components/layout/Main';
import AddEntryForm from '../containers/AddEntryForm';

const AddEntry = (props) => (
  <div className="addEntryContent">
    <Main {...props}>
      <AddEntryForm {...props} />
    </Main>
  </div>
);

export default AddEntry;