// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9YZwhz3U6bAgfiaj_kWULWjE911ubSYk",
  authDomain: "alinabo-blog.firebaseapp.com",
  projectId: "alinabo-blog",
  storageBucket: "alinabo-blog.appspot.com",
  messagingSenderId: "499123719163",
  appId: "1:499123719163:web:beca5d3541ea2d9fa3d95e",
  measurementId: "G-VC2ZTKW4C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};