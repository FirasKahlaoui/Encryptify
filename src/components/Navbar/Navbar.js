import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>Encryptify</h1>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "active" : ""}
            >
              Dashboard
            </Link>
            <Link
              to="/logout"
              className={location.pathname === "/logout" ? "active" : ""}
              onClick={handleLogout}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={location.pathname === "/signup" ? "active" : ""}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
