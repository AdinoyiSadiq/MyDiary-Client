import React from 'react';
import Auth from '../components/layout/Auth';
import SigninForm from '../containers/SigninForm';

const Signin = (props) => (
  <div>
    <Auth>
      <SigninForm {...props}/>
    </Auth>
  </div>
);

export default Signin;