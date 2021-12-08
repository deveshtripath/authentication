// import New from "./New"
import './App.css';
import Header from "./Header";
import Login from './Login';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom"
import SignIn from "./SignIn";
import Sub from "./Sub";

function App() {
  return (
    
      <Router>
    <div>
        <Switch>
          <Route path="/signin">
          <SignIn/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
          <Header/>
              {/* <New/> */}
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