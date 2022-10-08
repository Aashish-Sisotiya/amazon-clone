// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCvOkmzgn25-nxFRCfHG4AZICca9ibhInE",
    authDomain: "clone-63626.firebaseapp.com",
    projectId: "clone-63626",
    storageBucket: "clone-63626.appspot.com",
    messagingSenderId: "438523788061",
    appId: "1:438523788061:web:2f90b05d9bf2a30c58bff4",
    measurementId: "G-NT888WLKB3"
};

const app = initializeApp(firebaseConfig);  // initialise firebase

export const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service