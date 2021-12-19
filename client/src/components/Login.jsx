import React, { useState } from 'react';
import DigitButton from './DigitButton';

const Login = ({ clickHandler, checkPasscodeHandler, message,passcode, clearHandler }) => {
  const buttons = [1,2,3,4,5,6,7,8,9,'Clear',0,'Enter'];





  return (
    <div className="login-ui">
      <h4>{message}</h4>

      <div className="user-id">{passcode}</div>
      <div className="buttons">
        <div className="digit-buttons">
          {buttons.map((e, i) => (
            
            <DigitButton passcodeHandler={checkPasscodeHandler}value={e} key={i} clickHandler={clickHandler} clearHandler={clearHandler}/>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Login;
