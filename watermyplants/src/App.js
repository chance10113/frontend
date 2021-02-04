import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Util/PrivateRoute";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import CreatePlant from './Components/CreatePlant';
import Card from './Components/Card';
import EditPlant from './Components/EditPlant';
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
        <PrivateRoute path='/editplant:id'>
        <EditPlant/>
        </PrivateRoute>
        <PrivateRoute path='/plant:id'>
          <Card/>
        </PrivateRoute>
        <PrivateRoute path='/createplant'>
          <CreatePlant/>
        </PrivateRoute>
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
