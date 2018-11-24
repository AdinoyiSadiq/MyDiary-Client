import React from 'react';

const Button = (props) => {
  const { className, title, type } = props;
  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
};

export default Button;