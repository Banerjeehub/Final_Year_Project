// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-406918.firebaseapp.com",
  projectId: "blog-app-406918",
  storageBucket: "blog-app-406918.appspot.com",
  messagingSenderId: "424316727790",
  appId: "1:424316727790:web:1f51da122b11b9bf2e9eff",
  measurementId: "G-W7G5JHZPP1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
