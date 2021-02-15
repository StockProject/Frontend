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
            investType:""
        };
    }

    submitRegister=async(dataTosubmit)=>{
            var res;
            const request  = await axios
                .post("http://localhost:4000/auth/register", dataTosubmit,{withCredentials:true})
                .then((response) => res = response.data)
        console.log(res);
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        this.submitRegister(this.hendleBody());
    }


    handleChangeName=(e)=>{
        e.preventDefault();
        this.setState({
            userName:e.target.value
        })
    }

    handleChangePassword=(e)=>{
        e.preventDefault();
        this.setState({
            userPassword:e.target.value
        });
    }
    handleChangeInvestType=(e)=>{
        e.preventDefault();
        this.setState({
            investType:e.target.value
        })
    }
    handleChangeEmail=(e)=>{
        e.preventDefault();
        this.setState({
            userEmail:e.target.value
        })
    }

    checkPW = (e) => {
        e.preventDefault();
        //비밀번호 유효성검사(영문,숫자 혼합 6~20)
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
    }

    hendleBody=()=>{
        let body={
            userName : this.state.userName,
            userPassword : this.state.userPassword,
            userEmail : this.state.userEmail,
            investType : this.state.investType
        }
        return body;
    }

    render(){
        return(
            <form
                onSubmit={this.onSubmitHandler}>

                <div className = "rootContainer">
                    <div className = "boxContainer">
                        <div className ="innerContainer">
                            <div className ="header">회원가입</div>
                            <div className ="box">
                                <div className ="innerGroup">
                                    <label html = "userID">닉네임</label>
                                    <input
                                        type ="text"
                                        name = "userID"
                                        value={this.state.userName}
                                        onChange={this.handleChangeName}
                                        className = "loginInput"
                                        placeholder="닉네임"
                                    />
                                </div>
                                <div className = "innerGroup">
                                    <label html ="userEmail">이메일</label>
                                    <input
                                        type = "email"
                                        name = "userEmail"
                                        value = {this.state.email}
                                        onChange = {this.handleChangeEmail}
                                        className = "loginInput"
                                        placeholder = "example@example.com"
                                    />
                                </div>
                                <div className ="innerGroup">
                                    <label html = "userPW">비밀번호</label>
                                    <input
                                        type = "password"
                                        name = "userPW"
                                        value={this.state.pw}
                                        onChange={this.handleChangePassword}
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
                                
                                <div className ="innerRadio">
                                    <label html = "investType">투자성향:</label>
                                    <input
                                        type = "radio"
                                        name = "investType"
                                        className = "investType"
                                        onChange = {this.handleChangeInvestType}
                                        value = {1}
                                    /> 장기
                                    <input
                                        type = "radio"
                                        name = "investType"
                                        className = "investType"
                                        onChange = {this.handleChangeInvestType}
                                        value = {2}
                                    /> 스윙
                                    <input
                                        type = "radio"
                                        name = "investType"
                                        className = "investType"
                                        onChange = {this.handleChangeInvestType}
                                        value = {3}
                                    /> 단기
                                </div>

                                <button
                                    type ="submit"
                                    className ="registerBtn"
                                >
                                    회원가입
                                </button>
                            </div>
                        </div>

                        <Link to="/auth/login" className="controller">로그인</Link>

                    </div>
                </div>
            </form>
        )
    }

}

export default RegisterBox;