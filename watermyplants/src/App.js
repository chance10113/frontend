import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from './Util/PrivateRoute';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to='/'>Register</Link>
      </nav>
      <Switch>
        <PrivateRoute path='/home'>
          <Home />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
