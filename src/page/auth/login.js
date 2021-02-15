import React from "react";
import ReactDom from "react-dom";
import '../css/login.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

class LoginBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id:"",
        pw:""
      };
    } 
    submitLogin=(e)=>{
        {/*const option ={
          url : '/auth/login',
          method: 'POST',
          header: {

          },
          data:{
            id:this.id,
            pw:this.pw
          }
        }  
        axios(option).then(response => console.log(response))
      */}
    console.log(this.id)
    }



    handleCangeID=(e)=>{
      this.setState({
          id:e.target.value
      })
  }



  handleCangePassword=(e)=>{
    this.setState({
        pw:e.target.value
    });
}


    render(){
        return(
          <div className = "rootContainer">
            <div className = "boxContainer">
              <div className = "innerConainer">
                  <div className="header">LOGIN</div>
                  <div className ="box">
                      <div className = "inputGroup">
                          {/*<label htmlFor ="userID">아이디</label>*/}
                          <input 
                          type ="text"
                          name = "userID"
                          className="loginInput"
                          onChange={this.handleCangeID}
                          placeholder ="아이디"
                          />
                      </div>
                      <div className ="inputGroup">
                          {/*<label htmlFor ="userPW">비밀번호</label>*/}
                          <input 
                          type = "password"
                          name = "userPW"
                          className = "loginInput"
                          onChange={this.handleCangePassword}
                          placeholder="비밀번호"
                          />
                      </div>
                      <button
                      type ="button"
                      className ="loginBtn"
                      onClick ={this.submitLogin.bind(this)}
                      >
                          로그인
                      </button>
                      
                  </div>
              </div>
                    <Link to="/auth/register" className="controller">회원가입</Link>
              
            </div>
          </div>
        );
    }
}
export default LoginBox;