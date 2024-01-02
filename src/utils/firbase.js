// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBz5Tdjr5pKHa0UZXIhbEwVCBxxZ5cdxs",
  authDomain: "gptflix-1d120.firebaseapp.com",
  projectId: "gptflix-1d120",
  storageBucket: "gptflix-1d120.appspot.com",
  messagingSenderId: "75470581739",
  appId: "1:75470581739:web:c504a89b31c111f19333ae",
  measurementId: "G-C2J93RJW84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()