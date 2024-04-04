// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbImw-BlJUO7n_HceSfDq9JH9IBFupu-o",
    authDomain: "dragon-news-auth-a5448.firebaseapp.com",
    projectId: "dragon-news-auth-a5448",
    storageBucket: "dragon-news-auth-a5448.appspot.com",
    messagingSenderId: "242887557481",
    appId: "1:242887557481:web:0768e4db95f51c1b68fdf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);