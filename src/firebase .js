import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import 'firebase/auth';
// import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAEcsa9YTrEDD8OTCpw1f7FD6HQPXpuzWQ",
    authDomain: "authenticationg-afb52.firebaseapp.com",
    projectId: "authenticationg-afb52",
    storageBucket: "authenticationg-afb52.appspot.com",
    messagingSenderId: "583915620285",
    appId: "1:583915620285:web:fbde681a4a7160a49a34d4",
    measurementId: "G-EXE9SGL03R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);