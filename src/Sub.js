import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import React, { useState } from "react";
import "./App.css";

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


function Sub() {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


    const logout = async () => {
        await signOut(auth);
      };
    return (
            <div className="checkout">
      <div className="checkout__left">
        <div>
          <h4> User Logged In: </h4>
      {user?.email ? <h1>You have login</h1> : <h1>You have not login</h1>}

          <button onClick={logout}> Sign Out </button>

        </div>
      </div>

      <div className="checkout__right">
      </div>
    </div>
    )
}

export default Sub
