import React from 'react';
import Auth from '../components/layout/Auth';
import SignupForm from '../containers/SignupForm';

const Signup = (props) => (
  <div>
    <Auth>
      <SignupForm {...props} />
    </Auth>
  </div>
);

export default Signup;