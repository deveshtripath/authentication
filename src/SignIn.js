import React, { useState } from "react";
import "./App.css";
import { Button, Input } from "@material-ui/core";
import { Link } from 'react-router-dom'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./Login.css";
import "./App.css";
import { auth } from "./firebase";


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
        <div className="log-form">
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




    <h4> User Logged In: </h4>
      {user?.email ? <h1>You have login</h1> : <h1>You have not login</h1>}

       {/* <button onClick={logout}> Sign Out </button> */}

        </div>
    )
}

export default SignIn