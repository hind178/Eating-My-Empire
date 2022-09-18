import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';
import LoginButton from "../Contact/LoginButton";
import Profile from "../Contact/Profile";



const Navbar = () => {
  return (
    <div className="navbar"  fixed="top" >
      <div className="navbar-heading">
     
        <h1>
          Eating My Empire <span>App</span>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/categories">
            {" "}
            <li>Categories</li>
          </Link>
          <Link to="/random">
            {" "}
            <li>Random</li>
          </Link>
          <Link to="/ContactUs">
            {" "}
            <li>Contact Us</li>
          </Link>

          <LoginButton />
          <Profile />
        </ul>
      </div>
    
    </div>
  );
};
export default Navbar;