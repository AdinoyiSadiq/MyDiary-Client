import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions/authActions';

class HeaderModal extends Component {
  render() {
    const { showModal, signout } = this.props;
    return (
      <ul className={`headerModal ${showModal ? 'displayHeaderModal' : null}`}>
        <li><Link to="/main/profile">View Profile</Link></li>
        <li onClick={signout}>
          <div>
            SignOut
          </div>
        </li>
      </ul>
      );
  }
  
};

export default connect(null, { signout })(HeaderModal);