import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase"; // Import Firestore
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import "./Signup.css";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agreeTerms) {
      setError("You must agree to the terms and conditions");
      return;
    }

    try {
      // Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Firestore: Store additional user info
      await addDoc(collection(firestore, "users"), {
        uid: user.uid, // User ID from Firebase Authentication
        fullName,
        username,
        email,
        createdAt: new Date().toISOString(), // Timestamp for when the account was created
      });

      // Navigate to home after signup
      navigate("/");
    } catch (err) {
      console.error("Signup failed", err);
      setError("Failed to sign up");
    }
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="terms">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label>I agree to the terms and conditions</label>
          <span className="rules-icon" onClick={toggleRules}>
            !
          </span>
        </div>

        {showRules && (
          <div className="rules-popup">
            <h3>Rules for Using the App</h3>
            <ul>
              <li>Keep your account information private.</li>
              <li>Use strong passwords to protect your account.</li>
              <li>Do not share sensitive data publicly.</li>
              <li>
                Abide by the community guidelines and respect other users.
              </li>
              <li>Any misuse of the app will result in account suspension.</li>
            </ul>
          </div>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;