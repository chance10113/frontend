import React from "react";
import { Route, Switch, Link } from "react-router-dom";
// import "./App.css";
// import "./Components/style.css";
import PrivateRoute from "./Util/PrivateRoute";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <nav>
        {localStorage.getItem("token") ? (
          <Link to="/home">Home</Link>
        ) : (
          <div></div>
        )}
      </nav>
      <Switch>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
