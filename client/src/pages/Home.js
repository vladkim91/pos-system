import React from 'react';
import Login from '../components/Login';
import About from '../pages/About';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <div className="landing-page">
      This is a login page
      <Route exact path="/" component={Login} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default Home;
