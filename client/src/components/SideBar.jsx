import React,  {useEffect}from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({setSidebarToggled}) => {
  const clickHandler = () => {
    setSidebarToggled(false)
    console.log('close')
  }
  return (
    <div className="side-bar">
      <span className="close-sidebar" onClick={clickHandler}>x</span>
      <Link style={{textDecoration:'none'}}to="/">
          <p className="nav-link">Home</p>
        </Link>
        <Link style={{textDecoration:'none'}} to="/inventory">
          <p className="nav-link">Manage Inventory</p>
        </Link>
        <Link style={{textDecoration:'none'}} to="/about">
          <p className="nav-link">About Mahalo</p>
        </Link>
        <Link style={{textDecoration:'none'}} to="/contact">
          <p className="nav-link">Contact</p>
        </Link>
    </div>
  );
};

export default SideBar;
