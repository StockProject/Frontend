import React from 'react';
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
            investType:"",
            duplicateEmail:false,
            pwCheck:"",
            flag: true
        };
    }

    submitRegister=async(dataTosubmit)=>{
            var res;
            await axios
                .post("http://localhost:4000/auth/register", dataTosubmit,{withCredentials:true})
                .then((response) => res = response.data.success)
            if(res){
                {<Link to="/auth/login" className="controller"></Link>}
                alert("회원가입에 성공하였습니다. 로그인 화면에서 로그인 해주세요.")
            }
            else{
                this.setState({
                    duplicateEmail:true
                })
            }
    }

    handleBody=()=>{
        let body={
            userName : this.state.userName,
            userPassword : this.state.userPassword,
            userEmail : this.state.userEmail,
            investType : this.state.investType
        }
        return body;
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        this.submitRegister(this.handleBody());
    }


    handleChangeName= async(e)=>{
        e.preventDefault();
        await this.setState({
            userName:e.target.value
        })
        await this.handleFlag()
    }

    handleChangePassword=async(e)=>{
        e.preventDefault();
        await this.setState({
            userPassword:e.target.value
        });
        await this.handleFlag()
    }

    handleChangeChackPassword=async(e)=>{
        e.preventDefault();
        await this.setState({
            pwCheck:e.target.value
        });
        await this.handleFlag()
    }

    handleChangeInvestType=async(e)=>{
        e.preventDefault();
        await this.setState({
            investType:e.target.value
        })
        await this.handleFlag()
    }
    handleChangeEmail=async(e)=>{
        e.preventDefault();
        await this.setState({
            userEmail:e.target.value
        })
        await this.handleFlag()
    }

    confirmPW(){
        //비밀번호 유효성검사(영문,숫자 혼합 6~20)
        if(this.state.userPassword!==""&&this.state.pwCheck!==""){
          if (this.state.userPassword === this.state.pwCheck) {
            //const confirm = "일치"
            return false;
            /*this.setState({
              pwCheck: this.state.pwCheck
            });*/
          } else {
            //const unconfirm = "불일치"
            return true;
          }
    }
    else
    {
        return false;
    }
}

    checkPW(){
        if(this.state.userPassword!==""&&this.state.pwCheck!==""){
            return true;
        }
    else{
        return false;
    }
    }

    checkID(){
        if(this.state.userName!==""){
                return true;
            }
        else{
            return false;
        }
    }

    checkEmail(){
        if(this.state.userEmail!==""){
                return true;
            }
        else{
            return false;
        }
    }
    checkInvestType(){
        if(this.state.investType!==""){
            return true;
        }
    else{
        return false;
        }
    }
    handleFlag(){        
        if(!this.confirmPW()&&this.checkEmail()&&this.checkID()&&this.checkInvestType()){
         this.setState({
            flag:false
        })
    }
        else{
            this.setState({
                flag:true
            })
        }
    }

    
    render(){
        return(
            <form
                onSubmit={this.onSubmitHandler}
                className = "rootContainer"
            >
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
                                {this.state.duplicateEmail&&<div id = 'confirmEmail' style={{
                                    color:'red',
                                    fontSize:13,
                                    marginLeft:"3px",
                                    marginBottom:"4px"}}>이미 가입된 이메일 입니다.</div>}
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
                                        onChange={this.handleChangeChackPassword}
                                        className = "loginInput"
                                        placeholder = "비밀번호 입력"
                                    />
                                </div>
                                {this.confirmPW()&&<div id = 'confirmPassword' style={{color:'red', fontSize:13,marginLeft:"3px"}}>비밀번호가 일치하지 않습니다.</div>}
                                
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
                                    disabled = {this.state.flag}
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