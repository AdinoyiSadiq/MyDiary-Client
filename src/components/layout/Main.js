import React from 'react';
import Header from '../shared/Header';

const Main = (props) => {
  const { children } = props;
  return (
    <div>
      <Header {...props}/>
      {children} 
    </div>
  );
};

export default Main;