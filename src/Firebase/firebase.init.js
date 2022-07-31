// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLGLh-UOINWhVkP4iq0PqczXCXZT_p-Vw",
  authDomain: "eventy-bb.firebaseapp.com",
  projectId: "eventy-bb",
  storageBucket: "eventy-bb.appspot.com",
  messagingSenderId: "1045074723890",
  appId: "1:1045074723890:web:29909c2363bba27fe6a82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;