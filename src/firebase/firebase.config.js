// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBtRoRpVR7IN1LXhuEKJStYqUsuaSbU4M",
    authDomain: "coffee-store-operation.firebaseapp.com",
    projectId: "coffee-store-operation",
    storageBucket: "coffee-store-operation.firebasestorage.app",
    messagingSenderId: "838789959916",
    appId: "1:838789959916:web:c725adc9a40eac85fc15c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);