
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB-ufltyA7hxECYAJv5dMrfoU5RaOvbL4Y",
  authDomain: "resufit-78540.firebaseapp.com",
  projectId: "resufit-78540",
  storageBucket: "resufit-78540.firebasestorage.app",
  messagingSenderId: "201511518559",
  appId: "1:201511518559:web:2a0face9eb1908eb87b6ea",
  measurementId: "G-JB71L692V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider};
