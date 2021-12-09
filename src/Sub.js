import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

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
