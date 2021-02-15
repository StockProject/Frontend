import React from "react";
import ReactDom from "react-dom";
import '../css/login.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
axios.defaults.withCredentials=true;

class LoginBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userEmail:"",
        userPassword:""
      };
    } 
    submitLogin=async(dataTosubmit)=>{
      var res;
      const request  = await axios
          .post("http://localhost:4000/auth/login", dataTosubmit,{withCredentials:true})
          .then((response) => res = response.data)
      console.log(res);
}

    onSubmitHandler = (event) =>{
      event.preventDefault();
      this.submitLogin(this.hendleBody());
    }
    hendleBody=()=>{
      let body={
          userEmail : this.state.userEmail,
          userPassword : this.state.userPassword,
      }
      return body;
  }

    handleCangeID=(e)=>{
      this.setState({
          userEmail:e.target.value
      })
  }



  handleCangePassword=(e)=>{
    this.setState({
        userPassword:e.target.value
    });
}


    render(){
        return(
          <form onSubmit={this.onSubmitHandler}> 
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
                          placeholder ="이메일(example@example.com)"
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
                      type ="submit"
                      className ="loginBtn"
                      >
                          로그인
                      </button>
                      
                  </div>
              </div>
                    <Link to="/auth/register" className="controller">회원가입</Link>
              
            </div>
          </div>
          </form>
        );
    }
}
export default LoginBox;