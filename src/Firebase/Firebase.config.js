// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN3GQtJNL3wdEZtmIkI_BPOl1PKZAV-uQ",
  authDomain: "coffee-emporium-18fc2.firebaseapp.com",
  projectId: "coffee-emporium-18fc2",
  storageBucket: "coffee-emporium-18fc2.appspot.com",
  messagingSenderId: "1002031619485",
  appId: "1:1002031619485:web:aee37b02e9df03c7d2e374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
