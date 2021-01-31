import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from './LoginPage'
import RegisterPage from "./RegisterPage";
import Header from "./Header";
import CardPage from "./HomePage";


function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={CardPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path='/register' component={RegisterPage}/>
        </Switch>
    </Router>
    

  );
}

export default App;