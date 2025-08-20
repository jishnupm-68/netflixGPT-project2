// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHJnlRkrdjSVoiXGYpStEXY7Y7JTTX2zs",
  authDomain: "netflixgpt-523f9.firebaseapp.com",
  projectId: "netflixgpt-523f9",
  storageBucket: "netflixgpt-523f9.firebasestorage.app",
  messagingSenderId: "37300385054",
  appId: "1:37300385054:web:b87d121413a04e7307050f",
  measurementId: "G-BV6BQGTEJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();