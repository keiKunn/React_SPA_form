import React from "react";
import Layout from "./Layout";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    const selectYear = [];
    const selectMonth = [];
    const selectDay = [];

    // 年：1930年代から2021年代までを設定
    for (let i = 1930; i <= 2021; i++) {
      selectYear.push(i);
    }
    // 月
    for (let i = 1; i <= 12; i++) {
      selectMonth.push(i);
    }
    // 日
    for (let i = 1; i <= 31; i++) {
      selectDay.push(i);
    }

    this.state = {
      radioBtnSex: '',
      selectYear,
      selectMonth,
      selectDay
    };

    //this.changeRadioBtn = this.changeRadioBtn.bind(this);
  }

  /**
   *  ラジオボタン選択
   */
  changeRadioBtn = (e) => {
    const choicedBtn = e.target.value;
    // 表示切替
    let radioBtnState;
    if (choicedBtn === 'men') {
      radioBtnState = '男性';
    } else if (choicedBtn === 'women') {
      radioBtnState = '女性';
    }
    // 表示タスクをset
    this.setState({ radioBtnSex: radioBtnState });
  }

  handleMonthChange = (e) => {
    const monthKey = e.target.value;
    const month = {
      1: 31, 2: 29, 3: 31, 4: 30,
      5: 31, 6: 30, 7: 31, 8: 31,
      9: 30, 10: 31, 11: 30, 12: 31,
    }

    // 選択された月の日数を取得
    const newDays = month[monthKey];
    const selectDay = []; 
    // 日数を新しくセット
    for (let i = 1; i <= newDays; i++) {
      selectDay.push(i);
    }
    this.setState({selectDay});
  }

  render() {
    const radioBtnSex = this.state.radioBtnSex;
    const selectYear = this.state.selectYear;
    const selectMonth = this.state.selectMonth;
    const selectDay = this.state.selectDay;

    return (
      <div>
        <div>
          STEP1
          <p>お客様の情報を入力してください</p>
        </div>
        <div>
          <p>-性別-</p>
          <input type="radio" id="radio-men-id" name="sex" value="men" checked={radioBtnSex === '男性'} onChange={this.changeRadioBtn} />
          <label htmlFor="radio-men-id">男性</label>
          <input type="radio" id="radio-women-id" name="sex" value="women" checked={radioBtnSex === '女性'} onChange={this.changeRadioBtn} />
          <label htmlFor="radio-women-id">女性</label>

          <p>-生年月日-</p>
          <div className="form-select-box">
            <span className="form-select">
              <select className="birthday-year dropdown-toggle">
                {/*1930-2021まで */}
                {
                  selectYear.map((year, index) => {
                    if (year === 1990) {
                      // 初期値設定
                      return <option key={index} value={year} selected>{year} 年</option>
                    }
                    return <option key={index} value={year}>{year} 年</option>
                  })
                }
              </select>
            </span>
            /
            <span className="form-select">
              <select className="birthday-month dropdown-toggle" onChange={this.handleMonthChange}>
                {/*1-12まで */}{
                  selectMonth.map((month, index) => {
                    if (month === 1) {
                      // 初期値設定
                      return <option key={index} value={month} selected>{month} 月</option>
                    }
                    return <option key={index} value={month}>{month} 月</option>
                  })
                }
              </select>
            </span>
            /
            <span className="form-select">
              <select className="birthday-day dropdown-toggle">
                {/*1-31まで */}
                {
                  selectDay.map((day, index) => {
                    if (day === 1) {
                      // 初期値設定
                      return <option key={index} value={day} selected>{day} 日</option>
                    }
                    return <option key={index} value={day}>{day} 日</option>
                  })
                }
              </select>
            </span>
            <Layout nextPage="/Questions" />
          </div>
        </div>
      </div>
    );
  }
}
