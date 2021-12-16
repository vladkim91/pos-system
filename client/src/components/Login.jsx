import React, {useState} from 'react';
import DigitButton from './DigitButton';

const Login = () => {
  const [passcode, setPasscode] = useState('')
  const buttons = [];
  for (let i = 0; i < 10; i++) {
    buttons.push(i);
  }

  const clickHandler = (e) => {
    let tempPasscode = passcode
    tempPasscode = passcode + e.target.value 
    setPasscode(tempPasscode)
   
  };


  const checkPasscodeHandler = (e) => {
    e.preventDefault()
    console.log(passcode)
  }


  return (
    <div className="login">
      <div className="user-id">{passcode}</div>
      <div className="buttons">
        <div className="digit button">
          {buttons.map((e, i) => (
            <DigitButton value={e} key={i} clickHandler={clickHandler} />
          ))}
          
        </div>
        <button onClick={checkPasscodeHandler} className="button enter">Enter</button>
      </div>
    </div>
  );
};

export default Login;
