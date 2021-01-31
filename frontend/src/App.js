import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from './LoginPage'
import RegisterPage from "./RegisterPage";
import Header from "./Header";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";

export default function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path='/register' component={RegisterPage}/>
        </Switch>
    </Router>
  );
};
