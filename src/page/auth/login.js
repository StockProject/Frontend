import React from "react";
import ReactDom from "react-dom";
import '../css/login.css'
import { Link } from 'react-router-dom';

class LoginBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id:'',
        pw:''
      };
    } 
    submitLogin(e){

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
                          placeholder ="아이디"
                          />
                      </div>
                      <div className ="inputGroup">
                          {/*<label htmlFor ="userPW">비밀번호</label>*/}
                          <input 
                          type = "password"
                          name = "userPW"
                          className = "loginInput"
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
                    <Link to="/auth/register" className="controller">로그인</Link>
              
            </div>
          </div>
        );
    }
}
export default LoginBox;