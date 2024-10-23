import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Encryptify</h1>
      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
