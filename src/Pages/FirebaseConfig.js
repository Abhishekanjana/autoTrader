// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_mQZgd9ELQvcV-6T_8T2HQPkd-f489ZM",
  authDomain: "autotrader-72220.firebaseapp.com",
  projectId: "autotrader-72220",
  storageBucket: "autotrader-72220.appspot.com",
  messagingSenderId: "404145408907",
  appId: "1:404145408907:web:00ba29169f0c9d9b98bd8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};