// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeM5DwsODSDaZrdhcSZgOOzt2MM5ClYbo",
  authDomain: "netflixgpt-29e73.firebaseapp.com",
  projectId: "netflixgpt-29e73",
  storageBucket: "netflixgpt-29e73.firebasestorage.app",
  messagingSenderId: "968102363969",
  appId: "1:968102363969:web:5ae53b33f417c0021a57c0",
  measurementId: "G-GK4ZL5TE8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);