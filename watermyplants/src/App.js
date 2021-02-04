import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Util/PrivateRoute";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreatePlant from './Components/CreatePlant';
import Plant from './Components/Plant';
import EditPlant from './Components/EditPlant';
import axiosWithAuth from './Util/axiosWithAuth'
import PlantList from "./Components/PlantList";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://water-my-plants-four.herokuapp.com/plants")
      .then((res) => {
        setPlants(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log("Home, fetching data error", err.response);
      });
  }, []);

  return (
    <div className="App">
      <nav>
        {localStorage.getItem("token") ? (
          <Link to="/plantlist">Your Plants</Link>
        ) : (
          <div></div>
        )}
      </nav>
      <Switch>

        {/* <PrivateRoute path='/editplant:id'>
        <EditPlant/>
        </PrivateRoute>
        <PrivateRoute path='/plant:id'>
          <Plant/>
        </PrivateRoute> */}

        <PrivateRoute exact path='/createplant'>
          <CreatePlant plants={plants} setPlants={setPlants}/>
        </PrivateRoute>
        <PrivateRoute path="/plantlist">
          <PlantList plants={plants} setPlants={setPlants} />
        </PrivateRoute>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
