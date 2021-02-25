import React from "react";
import ReactDom from "react-dom";
import "../css/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      check: false,
      flag: true,
    };
  }
  submitLogin = async (dataTosubmit) => {
    var res;
    const request = await axios
      .post("http://localhost:4000/auth/login", dataTosubmit, {
        withCredentials: true,
      })
      .then((response) => (res = response));
    console.log(res);
    if (res === "잘못된 이메일입니다") {
      this.setState({
        check: true,
      });
    } else if (res === "잘못된 비밀번호입니다") {
      this.setState({
        check: true,
      });
    } else {
      alert("로그인에 성공하였습니다.");
    }
  };

  handleFlag() {
    if (this.state.userEmail !== "" && !this.state.userPassword !== "") {
      this.setState({
        flag: false,
      });
    } else {
      this.setState({
        flag: false,
      });
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.submitLogin(this.hendleBody());
  };
  hendleBody = () => {
    let body = {
      userEmail: this.state.userEmail,
      userPassword: this.state.userPassword,
    };
    return body;
  };

  handleCangeID = async (e) => {
    await this.setState({
      userEmail: e.target.value,
    });
    await this.handleFlag();
  };

  handleCangePassword = async (e) => {
    await this.setState({
      userPassword: e.target.value,
    });
    await this.handleFlag();
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="rootContainer">
        <div className="rootContainer">
          <div className="boxContainer">
            <div className="innerConainer">
              <div className="header">LOGIN</div>
              <div className="box">
                <div className="inputGroup">
                  {/*<label htmlFor ="userID">아이디</label>*/}
                  <input
                    type="text"
                    name="userID"
                    className="loginInput"
                    onChange={this.handleCangeID}
                    placeholder="이메일(example@example.com)"
                  />
                </div>
                <div className="inputGroup">
                  {/*<label htmlFor ="userPW">비밀번호</label>*/}
                  <input
                    type="password"
                    name="userPW"
                    className="loginInput"
                    onChange={this.handleCangePassword}
                    placeholder="비밀번호"
                  />
                </div>
                {this.state.check && (
                  <div
                    id="confirmEmail"
                    style={{
                      color: "red",
                      fontSize: 13,
                      marginLeft: "3px",
                      marginBottom: "4px",
                    }}
                  >
                    이메일 혹은 비밀번호를 확인하세요
                  </div>
                )}
                <button
                  type="submit"
                  className="loginBtn"
                  disabled={this.state.flag}
                >
                  로그인
                </button>
              </div>
            </div>
            <Link to="/auth/register" className="controller">
              회원가입
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
export default LoginBox;
