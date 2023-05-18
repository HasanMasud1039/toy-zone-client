// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcbsVY66BYtIwkRKTQmMwiXNHGH6XES6U",
  authDomain: "toy-zone-727ba.firebaseapp.com",
  projectId: "toy-zone-727ba",
  storageBucket: "toy-zone-727ba.appspot.com",
  messagingSenderId: "939798423442",
  appId: "1:939798423442:web:cd940152284d9234a7034b",
  measurementId: "G-2LD8RMB3S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;