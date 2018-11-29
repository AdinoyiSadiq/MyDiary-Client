import React from 'react';

const AuthInput = (props) => {
  const { name, type, placeholder, id, value, handleChange, handleBlur, error, touched } = props;

  return (
    <div className="authWrapper">
      <input
        type={type || 'text'}
        placeholder={placeholder}
        id={id || name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className="error">{touched[name] ? error[name] : ''}</div>
    </div>
  );
};

export default AuthInput;