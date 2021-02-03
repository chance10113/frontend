import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import styled from "styled-components";

function App() {

  return ( 

      <StyledApp>
        <Switch>
          <Route>
            <Login />
          </Route>
          <Route>
            <Register />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </StyledApp>

        );
        
}

export default App;

const StyledApp = styled.div`

`
