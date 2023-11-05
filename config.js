import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBaOYFDstK-CACZEgkp6RzO_V-Szd65tSE",
    authDomain: "social-app-19cc2.firebaseapp.com",
    projectId: "social-app-19cc2",
    storageBucket: "social-app-19cc2.appspot.com",
    messagingSenderId: "175670195417",
    appId: "1:175670195417:web:65d82dfff6af19f3db3ac8",
    measurementId: "G-CPJY2WZT0Y"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);