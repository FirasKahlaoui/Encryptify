// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import github from "../assets/images/github-icon.svg";

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <h1>Encryptify</h1>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
      <main>
        <h2>Welcome to Encryptify</h2>
        <p>Your one-stop solution for secure encryption and decryption.</p>
      </main>
      <footer>
        <p>Developed with love by Firas Kahlaoui</p>
        <a
          href="https://github.com/FirasKahlaoui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub Profile" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
