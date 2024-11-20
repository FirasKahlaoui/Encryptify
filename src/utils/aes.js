// src/utils/aes.js
import CryptoJS from 'crypto-js';

export const aesEncrypt = (text, key) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

export const aesDecrypt = (ciphertext, key) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};