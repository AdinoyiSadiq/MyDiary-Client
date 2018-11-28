import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileToggle from '../components/ProfileToggle';
import ProfileDetails from '../components/ProfileDetails';
import { getUserProfile } from '../actions/profileActions';

class ProfileModal extends Component {
  componentDidMount = () => {
    const { getUserProfile } = this.props;
    getUserProfile();
  }

  renderProfileModal() {
    const { profile } = this.props;
    if (profile) {
      return (
        <section>
          <div>
            <ProfileToggle />
            <ProfileDetails profile={profile} />
          </div>
        </section>
      );
    } else {
      return <div>Loading...</div>
    }
  }

  render() {
    return (
      <main>
        {this.renderProfileModal()}
	    </main>
    );
  }
}

function mapStateToProps(state) {
  return { profile: state.userProfile.profile };
}

export default connect(mapStateToProps, { getUserProfile })(ProfileModal);