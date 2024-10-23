// src/pages/Signup.js
import React, { useState } from "react";
import { auth, firestore } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await firestore.collection("users").doc(userCredential.user.uid).set({
        email: email,
        approved: false, // Initially not approved
      });
      alert("Account created! Please wait for admin approval.");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
