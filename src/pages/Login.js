// src/pages/Login.js
import React, { useState } from 'react';
import { auth, firestore } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const userDoc = await firestore.collection('users').doc(userCredential.user.uid).get();
      if (!userDoc.exists || !userDoc.data().approved) {
        alert('Account not approved by admin.');
        await auth.signOut();
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
