// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmbC32YbB1HAMe6q1wB3k9s0Zz5y6SjVg",
    authDomain: "wedding-event-management-5e58a.firebaseapp.com",
    projectId: "wedding-event-management-5e58a",
    storageBucket: "wedding-event-management-5e58a.appspot.com",
    messagingSenderId: "542784502642",
    appId: "1:542784502642:web:89f3c2c64fedc23346fbeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;