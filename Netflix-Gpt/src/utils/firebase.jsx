// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5FJJ8baq0QrOy2Waa1_8WUPtQW0nJz90",
  authDomain: "netflixgpt-hrushikesh.firebaseapp.com",
  projectId: "netflixgpt-hrushikesh",
  storageBucket: "netflixgpt-hrushikesh.firebasestorage.app",
  messagingSenderId: "169229453774",
  appId: "1:169229453774:web:f20a66b9cf4f7f9053439f",
  measurementId: "G-5W9BN5WHLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();