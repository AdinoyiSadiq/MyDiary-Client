import React from 'react';
import { Link } from 'react-router-dom';

const EmptyListModal = () => (
  <section className="authContent emptyList">
    <div className="title">You don't seem to have created an entry</div>
    <hr/>
    <form>
      <Link to="/main/addEntry">
        <button>Create an Entry</button>
      </Link>
    </form>
	</section>
);

export default EmptyListModal;