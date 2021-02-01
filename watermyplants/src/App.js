import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";

function App() {

  return ( 
        <Switch>
          <Route>
            <Login />
          </Route>
          <Route>
            <Register />
          </Route> 
        </Switch>
        )
}

export default App;
