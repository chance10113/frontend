import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Util/PrivateRoute";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreatePlant from './Components/CreatePlant';
import EditPlant from './Components/EditPlant';
import axiosWithAuth from './Util/axiosWithAuth'
import PlantList from "./Components/PlantList";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/plants")
      .then((res) => {
        setPlants(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log("Home, fetching data error", err.response);
      });
  }, []);
  console.log(plants)

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

        <PrivateRoute exact path='/editplant:id'>
        <EditPlant plants={plants} setPlants={setPlants}/>
        </PrivateRoute>
        <PrivateRoute exact path='/createplant'>
          <CreatePlant plants={plants} setPlants={setPlants}/>
        </PrivateRoute>
        <PrivateRoute exact path="/plantlist">
          <PlantList plants={plants} setPlants={setPlants} />
        </PrivateRoute>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
