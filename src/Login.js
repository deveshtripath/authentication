
import { Button, Input } from "@material-ui/core";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import "./Login.css";
import { auth } from "./firebase";

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
        <div className="">
    <div >
        <div className="log-form">
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
            <Button type="submit" className="btn" onClick={login}>Login</Button>
            <a class="forgot" href="#">Forgot Username?</a>
            <h4> User Logged In: </h4>
      {user?.email ? <h1>You have login</h1> : <h1>You have not login</h1>}
          </form>
        </div>
      </div>

        </div>
    )
}

export default Login



{/* <div class="log-form">
  <h2>Login to your account</h2>
  <form>
    <input type="text" title="username" placeholder="username" />
    <input type="password" title="username" placeholder="password" />
    <button type="submit" class="btn">Login</button>
    <a class="forgot" href="#">Forgot Username?</a>
  </form>
</div><!--end log form --> */}