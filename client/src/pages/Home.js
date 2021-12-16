import React, { useState } from 'react';
import Login from '../components/Login';
import About from '../pages/About';
import { Route, Link } from 'react-router-dom';

const Home = () => {
  const [access, setAccess] = useState(false);
  const [passcode, setPasscode] = useState('');

  const clickHandler = (e) => {
    let tempPasscode = passcode;
    tempPasscode = passcode + e.target.value;
    setPasscode(tempPasscode);
  };

  const checkPasscodeHandler = (e) => {
    e.preventDefault();
    if (passcode === '1111') {
      setAccess(true);
    }
    setPasscode('');

    console.log(passcode, access);
  };

  return (
    <div className="landing-page">
      <h1>Mahalo</h1>

      {!access ? (
        <Route
          exact
          path="/"
          component={(props) => (
            <Login
              {...props}
              clickHandler={clickHandler}
              checkPasscodeHandler={checkPasscodeHandler}
              passcode={passcode}
            />
          )}
        />
      ) : null}

      <Route path="/about" component={About} />
    </div>
  );
};

export default Home;
