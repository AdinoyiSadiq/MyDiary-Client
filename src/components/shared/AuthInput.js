import React from 'react';

const AuthInput = (props) => {
  const { name, type, placeholder, id } = props;

  return (
    <div>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        id={id || name}
      />
    </div>
  );
};

export default AuthInput;