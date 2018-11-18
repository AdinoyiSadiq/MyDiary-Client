import React from 'react';
import Auth from '../components/layout/Auth';
import SigninForm from '../containers/SigninForm';

const Signin = () => (
  <div>
    <Auth>
      <SigninForm />
    </Auth>
  </div>
);

export default Signin;