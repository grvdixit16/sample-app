import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from '../Common/PrivateRoute';
import Nav from '../Nav';
import Home from '../Home';
import About from '../About';
import Login from '../Login';
import Spinner from '../Spinner';
import Testing from '../Testing';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <Route path="/login" component={Login} />

        <Testing />

        <Spinner />
      </BrowserRouter>
    </div>
  );
}

export default App;
