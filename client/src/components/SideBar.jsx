import React,  {useEffect}from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({setSidebarToggled}) => {
  const clickHandler = () => {
    setSidebarToggled(false)
    
  }
  return (
    <div className="side-bar">
      <span className="close-sidebar" onClick={clickHandler}>x</span>
      <Link style={{textDecoration:'none'}}to="/">
          <p onClick={clickHandler} className="nav-link">Home</p>
        </Link>
        <Link style={{textDecoration:'none'}} to="/inventory">
          <p onClick={clickHandler} className="nav-link">Manage Inventory</p>
        </Link>
        <Link style={{textDecoration:'none'}} to="/about">
          <p onClick={clickHandler} className="nav-link">About Mahalo</p>
        </Link>
        <Link style={{textDecoration:'none'}} to="/contact">
          <p onClick={clickHandler} className="nav-link">Contact</p>
        </Link>
    </div>
  );
};

export default SideBar;
