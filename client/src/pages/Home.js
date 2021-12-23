import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';
import Login from '../components/Login';
import About from '../pages/About';
import UserUi from '../components/UserUi';
import { Route, Link } from 'react-router-dom';
import '../styles/App.css';
import SideBar from '../components/SideBar';
import menuIcon from '../images/menu.png';
import Inventory from '../components/Inventory';
import Contact from '../components/Contact';

const Home = () => {
  const [access, setAccess] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [message, setMessage] = useState('Use your passcode to login');
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const [currentCategory, setCurrentCategory] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`${BASE_URL}/categories`);
      const categories = res.data.category;
      const categoryObject = categories.map((e) => ({
        name: e.name,
        id: e._id
      }));
      setCurrentCategory(categoryObject);
    };
    getCategories();
  }, []);

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
      {sidebarToggled ? (
        <SideBar setSidebarToggled={setSidebarToggled} />
      ) : (
        <img
          className="menu-icon"
          src={menuIcon}
          onClick={() => {
            setSidebarToggled(true);
          }}
        />
      )}
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
      <Route
        path="/inventory"
        component={(props) => (
          <Inventory {...props} currentCategory={currentCategory} />
        )}
      />

      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};

export default Home;
