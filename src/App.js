import React, { Component } from "react";
import { Route, Router} from 'react-router-dom'

import LoginBox from "./page/auth/login";
import RegisterBox from "./page/auth/register";
import MainPage from "./page/mainPage";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
      };
    }

    render(){
      return (
        <>
        <Route component={LoginBox} path="/auth/login" />
        <Route component={RegisterBox} path="/auth/register" />
        <Route component={MainPage} path="/page/mainPage"/>
        </>
      );
    }
  }
  export default App;

