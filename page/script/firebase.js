// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged 
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDldXGwpO8Q0Yfz3wI9VtcSY68BGKD-AGU",
  authDomain: "signup-form-ded29.firebaseapp.com",
  projectId: "signup-form-ded29",
  storageBucket: "signup-form-ded29.appspot.com",
  messagingSenderId: "1085513570624",
  appId: "1:1085513570624:web:3e1af6038fc9e373ae42a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth =getAuth(app);
export{auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged };
