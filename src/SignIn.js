import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import React, { useState } from "react";
import "./App.css";
import { Button, Input } from "@material-ui/core";

import { Link } from 'react-router-dom'


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



function SignIn() {
  
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
  
    const [user, setUser] = useState({});
  
      onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      });
  
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    
  
    const logout = async () => {
      await signOut(auth);
    };
    return (

  <div className="app">
        <div>
          <form className="app__login">
            
            
            <Input
              placeholder="email"
              type="text"
            onChange={(event) => {setRegisterEmail(event.target.value)}}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(event) => {setRegisterPassword(event.target.value)}}
            />
            <Button onClick={register}>Register</Button>
          </form>
        </div>
        <Link to="/login">  <button className="">Login</button> </Link>
      
      


    <h4> User Logged In: </h4>
      {user?.email ? <h1>You have login</h1> : <h1>You have not login</h1>}

       <button onClick={logout}> Sign Out </button>

        </div>
    )
}

export default SignIn
