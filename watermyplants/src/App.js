import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import "./App.css";
import Login from './Components/Login';
function App() {
  return <div className="App">
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </nav>
    <Switch>
    <Route path='/login'>
      <Login/>
    </Route>
    </Switch>
  </div>;
}

export default App;
