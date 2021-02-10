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
            re_pw:"",
            idCheck:""
        };
    }

    submitRegister(e){

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
                                    className = "loginInput"
                                    placeholder="ID"
                                    />
                            </div>
                            <div className ="innerGroup">
                                <label html = "userPW">비밀번호</label>
                                <input 
                                    type = "password"
                                    name = "userPW"
                                    className = "loginInput"
                                    placeholder = "비밀번호 입력"
                                    />
                            </div>
                            <div className ="innerGroup">
                                <label html = "checkPW">비밀번호 확인</label>
                                <input 
                                    type = "password"
                                    name = "checkPW"
                                    className = "loginInput"
                                    placeholder = "비밀번호 입력"
                                    />
                            </div>
                            <div className = "innerGroup">
                                <label html ="userEmail">이메일</label>
                                <input 
                                    type = "email"
                                    name = "userEmail"
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
                                    value = "장기"
                                    /> 장기
                                    <input
                                    type = "radio"
                                    name = "investType"
                                    className = "investType"
                                    value = "스윙"
                                    /> 스윙
                                    <input
                                    type = "radio"
                                    name = "investType"
                                    className = "investType"
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
                    
                    <Link to="/auth/login" className="controller">회원가입</Link>
                
                </div>
            </div>
        )
    }

}

export default RegisterBox;