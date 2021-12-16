import React, { useState } from 'react';
import DigitButton from './DigitButton';

const Login = ({ clickHandler, checkPasscodeHandler, passcode, access }) => {
  const buttons = [];
  for (let i = 0; i < 10; i++) {
    buttons.push(i);
  }

  return (
    <div className="login-ui">
      <h4>Use your passcode to login</h4>

      <div className="user-id">{passcode}</div>
      <div className="buttons">
        <div className="digit button">
          {buttons.map((e, i) => (
            <DigitButton value={e} key={i} clickHandler={clickHandler} />
          ))}
        </div>
        <button onClick={checkPasscodeHandler} className="button enter">
          Enter
        </button>
      </div>
    </div>
  );
};

export default Login;
