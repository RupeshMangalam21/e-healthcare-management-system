// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn1dv1hMYvI8x0Uji0XTCmtC0K4GBww8o",
  authDomain: "e-hms-database.firebaseapp.com",
  projectId: "e-hms-database",
  storageBucket: "e-hms-database.appspot.com",
  messagingSenderId: "743929762678",
  appId: "1:743929762678:web:aab7360c2eb9718e0f2057",
  measurementId: "G-30XBFKFEQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;