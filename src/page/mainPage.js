import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/mainPage.css";
axios.defaults.withCredentials = true;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="rootcontainer">
        <div className="loginArea">
          <button>로그인</button>
          <button>회원가입</button>
        </div>
        <div className="real_price_area">
          <div className="fixedArea">
            <div className="tabArea">
              <dl className="tab_area">
                <dt>
                  <a>관심종목</a>
                  <a>상한가</a>
                  <a>하한가</a>
                  <a>보유종목</a>
                  <a>관심종목</a>
                </dt>
              </dl>
            </div>

            <table className="table_st1 showPriceTable">
              <colgroup>
                <col width="*"></col>
                <col width="161"></col>
                <col width="262"></col>
                <col width="192"></col>
                <col width="145"></col>
                <col width="145"></col>
              </colgroup>

              <thead className="highLight">
                <tr>
                  <th>종목이름</th>
                  <th>현재가 (등락률)</th>
                  <th>누적 거래대금</th>
                  <th>시가</th>
                  <th>고가</th>
                  <th>저가</th>
                </tr>
              </thead>
            </table>
          </div>

          <table className="table_st1 stockTable">
            <colgroup>
              <col width="*"></col>
              <col width="161"></col>
              <col width="262"></col>
              <col width="192"></col>
              <col width="145"></col>
              <col width="145"></col>
            </colgroup>
            <tbody className="stock_list">
              <tr>
                <td>
                  <div className="sort_stockName_box">
                    <span>
                      <a href="#" className="starImg"></a>
                    </span>
                    <p>물건이름</p>
                  </div>
                </td>
                <td>
                  <div className="sort_stockPrice_ROF_box">현재가(등락률)</div>
                </td>
                <td>
                  <div className="sort_accumulated_transaction_amount_box">
                    누적 거래대금
                  </div>
                </td>
                <td>
                  <div className="sort_marketPrice_box">시가</div>
                </td>

                <td>
                  <div className="sort_highPrice_box">고가</div>
                </td>
                <td>
                  <div className="sort_lowPrice_box">저가</div>
                </td>
              </tr>
              
            </tbody>
          </table>
          
        </div>
      </div>
    );
  }
}
export default MainPage;
