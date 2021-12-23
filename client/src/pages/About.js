import React from 'react';
import logo from '../images/logo.png';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <img className="logo" src={logo} />
        <p>
          Mahalo is a clone of the best selling restaurant POS system Aloha.
          Mahalo allows user to render current products from the database and
          render them based on the categories. Everytime user adds products to
          the queue and click "Sell" the quanitity of the product will be
          adjusted in the database. App also allows user to add new products and
          remove current.
        </p>
      </div>
    </div>
  );
};

export default About;
