import React from 'react';
import ReactDOM from 'react-dom';
import '../css/login.css'
import { Link } from 'react-router-dom';
class RegisterBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:"",
            pw:"",
            email:"",
            pwCheck:"",
            idCheck:"",
            investType:""
        };
    }

    submitRegister(e){

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
    handleCangeInvestType=(e)=>{
        this.setState({
            investType:e.target.value
        })
    }
    handleCangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
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
                            onClick ={this.submitRegister.bind(this)}
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

export default RegisterBox;