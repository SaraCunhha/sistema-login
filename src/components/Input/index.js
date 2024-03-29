import React from 'react';
import * as C from "./style"

function Input  ({ type, placeholder, value, onChange })  {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder} />
  );
};

export default Input;
