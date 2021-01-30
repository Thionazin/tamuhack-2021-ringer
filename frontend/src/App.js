import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from './LoginPage'
import RegisterPage from "./RegisterPage";
import ButtonAppBar from "./HomePage";


function App() {
  
  
  
  
  return (
    <Router>
      <ButtonAppBar/>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path='/register' component={RegisterPage}/>
        </Switch>
    </Router>
    

  );
}

export default App;