// src/components/Dashboard.js
import React, { useState } from "react";
import { caesarEncrypt, caesarDecrypt } from "../utils/caesarCipher";
import { aesEncrypt, aesDecrypt } from "../utils/aes";
import { storeKey, retrieveKey } from "../utils/firebaseKeyManagement";
import { checkPermission } from "../utils/rbac";

const Dashboard = ({ user }) => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleCaesarEncrypt = () => {
    if (checkPermission(user.role, "encrypt")) {
      setEncryptedText(caesarEncrypt(text, shift));
    } else {
      alert("You do not have permission to encrypt");
    }
  };

  const handleCaesarDecrypt = () => {
    if (checkPermission(user.role, "decrypt")) {
      setDecryptedText(caesarDecrypt(encryptedText, shift));
    } else {
      alert("You do not have permission to decrypt");
    }
  };

  const handleAesEncrypt = async () => {
    if (checkPermission(user.role, "encrypt")) {
      const encrypted = aesEncrypt(text, key);
      await storeKey("aesKey", key);
      setEncryptedText(encrypted);
    } else {
      alert("You do not have permission to encrypt");
    }
  };

  const handleAesDecrypt = async () => {
    if (checkPermission(user.role, "decrypt")) {
      const storedKey = await retrieveKey("aesKey");
      setDecryptedText(aesDecrypt(encryptedText, storedKey));
    } else {
      alert("You do not have permission to decrypt");
    }
  };

  return (
    <div>
      <h1>Encryption Dashboard</h1>
      <div>
        <h2>Caesar Cipher</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <input
          type="number"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          placeholder="Shift"
        />
        <button onClick={handleCaesarEncrypt}>Encrypt</button>
        <button onClick={handleCaesarDecrypt}>Decrypt</button>
        <p>Encrypted Text: {encryptedText}</p>
        <p>Decrypted Text: {decryptedText}</p>
      </div>
      <div>
        <h2>AES Encryption</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter key"
        />
        <button onClick={handleAesEncrypt}>Encrypt</button>
        <button onClick={handleAesDecrypt}>Decrypt</button>
        <p>Encrypted Text: {encryptedText}</p>
        <p>Decrypted Text: {decryptedText}</p>
      </div>
    </div>
  );
};

export default Dashboard;
