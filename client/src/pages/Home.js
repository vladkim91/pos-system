import React, { useState } from 'react';
import Login from '../components/Login';
import About from '../pages/About';
import UserUi from '../components/UserUi';
import { Route, Link } from 'react-router-dom';
import '../styles/App.css';

const Home = () => {
  const [access, setAccess] = useState(true);
  const [passcode, setPasscode] = useState('');
  const [message, setMessage] = useState('Use your passcode to login');

  const clickHandler = (e) => {
    let tempPasscode = passcode;
    tempPasscode = passcode + e.target.value;
    setPasscode(tempPasscode);
  };

  const clearHandler = () => {
    setPasscode('');
  };

  const checkPasscodeHandler = (e) => {
    e.preventDefault();
    if (passcode === '1111') {
      setAccess(true);
    } else if (passcode !== '1111') {
      setMessage('Invalid passcode. Try again');
    }
    setPasscode('');
  };

  return (
    <div className="landing-page">
      <h1 className="logo">Mahalo</h1>

      {!access ? (
        <Route
          exact
          path="/"
          component={(props) => (
            <Login
              {...props}
              clearHandler={clearHandler}
              clickHandler={clickHandler}
              checkPasscodeHandler={checkPasscodeHandler}
              passcode={passcode}
              access={access}
              message={message}
            />
          )}
        />
      ) : (
        <Route exact path="/" component={UserUi} />
      )}

      <Route path="/about" component={About} />
    </div>
  );
};

export default Home;
