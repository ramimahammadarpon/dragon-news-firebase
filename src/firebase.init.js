// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKnHLFx1VWWt96IxqeA3WNPy9yQ8Glas",
  authDomain: "dragon-news-218f8.firebaseapp.com",
  projectId: "dragon-news-218f8",
  storageBucket: "dragon-news-218f8.firebasestorage.app",
  messagingSenderId: "515863082486",
  appId: "1:515863082486:web:0bb786c914247b328fc3d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);