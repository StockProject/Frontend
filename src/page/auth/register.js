import React from 'react';
import ReactDOM from 'react-dom';
import '../css/login.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
axios.defaults.withCredentials=true;

class RegisterBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:"",
            userPassword:"",
            userEmail:"",
            pwCheck:"",
            idCheck:"",
            investType:""
        };
    }

    submitRegister(dataTosubmit){
           const request  = axios
           .post("http://localhost:4000/auth/register", dataTosubmit,{withCredentials:true})
           .then((response) => console.log(response.data))
    }



    handleCangeID=(e)=>{
        e.preventDefault();
        this.setState({
            userName:e.target.value
        })
        user_id = this.state.userName;
        
    }

    handleCangePassword=(e)=>{
        e.preventDefault();
        this.setState({
            userPassword:e.target.value
        });
        user_pw = this.state.userPassword
    }
    handleCangeInvestType=(e)=>{
        e.preventDefault();
        this.setState({
            investType:e.target.value
        })
        invest_type = this.state.investType
    }
    handleCangeEmail=(e)=>{
        e.preventDefault();
        this.setState({
            userEmail:e.target.value
        })
        user_email = this.state.userEmail
    }

    /*checkPW = (e) => {
        e.preventDefault();
        비밀번호 유효성검사(영문,숫자 혼합 6~20)
        const chkPwd = function(str) {
          if (this.state.pw === this.state.pwCheck) {
            alert("일치합니다.");
            this.setState({
              pwCheck: this.state.pwCheck
            });
          } else {
            alert("불일치합니다.");
          }
        }
    */

    render(){
        return(
            <div className = "rootContainer">
                <div className = "boxContainer">
                    <div className ="innerContainer">
                        <div className ="header">회원가입</div>
                        <div className ="box">
                            <div className ="innerGroup">
                                <label html = "userID">아이디</label>
                                <input
                                    type ="text"
                                    name = "userID"
                                    value={this.state.id}
                                    onChange={this.handleCangeID}
                                    className = "loginInput"
                                    placeholder="ID"
                                    />
                            </div>
                            <div className ="innerGroup">
                                <label html = "userPW">비밀번호</label>
                                <input 
                                    type = "password"
                                    name = "userPW"
                                    value={this.state.pw}
                                    onChange={this.handleCangePassword}
                                    className = "loginInput"
                                    placeholder = "비밀번호 입력"
                                    />
                            </div>
                            <div className ="innerGroup">
                                <label html = "checkPW">비밀번호 확인</label>
                                <input 
                                    type = "password"
                                    name = "checkPW"
                                    value = {this.state.pwCheck}
                                    onChange={e=>this.setState({
                                        pwCheck:e.target.value
                                    })}
                                    className = "loginInput"
                                    placeholder = "비밀번호 입력"
                                    />
                            </div>
                            <div className = "innerGroup">
                                <label html ="userEmail">이메일</label>
                                <input 
                                    type = "email"
                                    name = "userEmail"
                                    value = {this.state.email}
                                    onChange = {this.handleCangeEmail}
                                    className = "loginInput"
                                    placeholder = "Email"
                                    />
                            </div>
                            <div className ="innerRadio">
                                <label html = "investType">투자성향:</label>
                                <input
                                    type = "radio"
                                    name = "investType"
                                    className = "investType"
                                    onChange = {this.handleCangeInvestType}
                                    value = "장기"
                                    /> 장기
                                    <input
                                    type = "radio"
                                    name = "investType"
                                    className = "investType"
                                    onChange = {this.handleCangeInvestType}
                                    value = "스윙"
                                    /> 스윙
                                    <input
                                    type = "radio"
                                    name = "investType"
                                    className = "investType"
                                    onChange = {this.handleCangeInvestType}
                                    value = "단기"
                                    /> 단기
                            </div>

                            <button
                            type ="button"
                            className ="registerBtn"
                            onClick ={this.submitRegister(body)}
                            >
                                회원가입
                            </button>
                        </div>
                    </div>
                    
                    <Link to="/auth/login" className="controller">로그인</Link>
                
                </div>
            </div>
        )
    }

}
var user_id;
var user_pw;
var user_email;
var invest_type;

let body={
    userName : user_id,
    userPassword : user_pw,
    userEmail : user_email,
    investType : invest_type
}
export default RegisterBox;