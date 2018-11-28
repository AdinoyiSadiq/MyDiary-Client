import React from 'react';

const DeleteEntryModal = (props) => {
  const { display, hideDeleteModal, deleteEntry } = props;
  return (
  <section className={`authContent deleteModal ${ display ? 'displayModal' : null}`}>
		<div className="title">Do you want to delete this entry?</div>
			<hr/>
			<div className="clearfix">
        <button 
          id="deleteButton"
          onClick={deleteEntry}
        >
          Yes
        </button>
        <button 
          id="cancelButton" 
          onClick={hideDeleteModal}
        >
          No
        </button>
			</div>
	</section>
  )
};

export default DeleteEntryModal;