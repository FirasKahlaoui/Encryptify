// src/utils/firebaseKeyManagement.js
import { firestore } from '../firebase';
import { aesEncrypt, aesDecrypt } from './aes';

const KEK = process.env.REACT_APP_KEK; // Key Encryption Key

export const storeKey = async (keyName, key) => {
  const encryptedKey = aesEncrypt(key, KEK);
  await firestore.collection('keys').doc(keyName).set({ key: encryptedKey });
};

export const retrieveKey = async (keyName) => {
  const doc = await firestore.collection('keys').doc(keyName).get();
  if (doc.exists) {
    const encryptedKey = doc.data().key;
    return aesDecrypt(encryptedKey, KEK);
  }
  throw new Error('Key not found');
};