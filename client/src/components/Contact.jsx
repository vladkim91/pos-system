import React from 'react';
import trello from '../images/trello.png';
import linked from '../images/linkedin-logo.png';
import github from '../images/github-logo.png';

const Contact = () => {
  return (
    <div className="contact-info">
      <h1>Created by Vlad Kim</h1>
      <div className="link-wrapper">
        <a href="https://github.com/vladkim91">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/vlad-kim-83b080107/">
          <img src={linked} alt="" />
        </a>
        <a href="https://trello.com/b/F7w2HI6G/mahalo-pos-system">
          <img src={trello} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
