import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import React, { useState } from "react";
import "./App.css";
import { Button, Input } from "@material-ui/core";

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


function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


    return (
        <div className="app">
    <div >
        <div>
          <form className="app__login">
            
            <Input
              placeholder="email"
              type="text"
              onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
            />
            <Button onClick={login}>Login</Button>
            <h4> User Logged In: </h4>
      {user?.email ? <h1>You have login</h1> : <h1>You have not login</h1>}
          </form>
        </div>
      </div>

        </div>
    )
}

export default Login
