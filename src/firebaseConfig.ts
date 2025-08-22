// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVOLVy1esFNvZwbk2H2kToYdZewgM_noc",
  authDomain: "otoddy-181a0.firebaseapp.com",
  projectId: "otoddy-181a0",
  storageBucket: "otoddy-181a0.firebasestorage.app",
  messagingSenderId: "62932816316",
  appId: "1:62932816316:web:8e71b598a57f0b37a65bb9",
  measurementId: "G-2LG1XETDHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);