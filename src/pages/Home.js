import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import github from "../assets/images/github-icon.svg";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="home">
      <Navbar isLoggedIn={isLoggedIn} />
      <main>
        <h2>Secure Encryption & Decryption</h2>
        <p>Protect your data with advanced encryption algorithms.</p>
        <p>Fast, secure, and reliable.</p>
      </main>
      <footer>
        <p>Developed with love by Firas Kahlaoui</p>
        <a
          href="https://github.com/FirasKahlaoui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub Profile" className="github-logo" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
