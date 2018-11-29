import React from 'react';
import Main from '../components/layout/Main';
import ProfileDetailsModal from '../containers/ProfileModal';

const Profile = (props) => (
  <div id="profileContent">
    <Main {...props}>
      <ProfileDetailsModal />
    </Main>
  </div>
);

export default Profile;