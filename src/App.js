// import New from "./New"
import './App.css';
import Header from "./Header";
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./SignIn";
import Sub from "./Sub";
import New from "./New";

function App() {
  return (
    
      <Router>
    <div>
        <Switch>
          <Route path="/signin">
          <Header/>
          <SignIn/>
          </Route>
          <Route path="/login">
          <Header/>
            <Login/>
          </Route>
          <Route exact path="/">
          <Header/>
              <Sub/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

// {/* <Header/>
//       <Login/>
//       // <New/> */}