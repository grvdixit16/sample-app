import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from '../Common/PrivateRoute';
import Nav from '../Nav';
import Home from '../Home';
import About from '../About';
import Login from '../Login';
import Spinner from '../Spinner';
import UserDetails from '../UserDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/UserDetails" component={UserDetails} />

        <Spinner />
      </BrowserRouter>
    </div>
  );
}

export default App;
