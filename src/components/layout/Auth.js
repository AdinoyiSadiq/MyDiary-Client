import React from 'react';
import Footer from '../shared/Footer';

const Auth = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Auth;