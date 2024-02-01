// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmDtUYgsImYx_2-V8_Q72OzUKR__rZiog",
  authDomain: "gptflix-564e5.firebaseapp.com",
  projectId: "gptflix-564e5",
  storageBucket: "gptflix-564e5.appspot.com",
  messagingSenderId: "197684122336",
  appId: "1:197684122336:web:f1cf2f3f175573edc83685",
  measurementId: "G-FN50C0HK41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()