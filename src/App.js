import React, { Component } from "react";
import LoginBox from "./page/auth/login";
import RegisterBox from "./page/auth/register";
import { Route, Router} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      };
    }

    render(){
      return (
        <>
        <Route component={LoginBox} path="/auth/login" />
        <Route component={RegisterBox} path="/auth/register" />
        </>
      );
    }
  }
  export default App;

