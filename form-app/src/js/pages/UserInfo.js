import React from "react";
import LinkSetting from "../components/LinkSetting";
import TitleArea from "../components/TitleArea";
import { SelectYear, SelectMonth, SelectDay } from "../define/SelectBirthDay";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioBtnSex: '',
      selectYear: SelectYear,
      selectMonth: SelectMonth,
      selectDay: SelectDay
    };
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
    this.setState({ selectDay });
  }

  render() {
    const radioBtnSex = this.state.radioBtnSex;
    const selectYear = this.state.selectYear;
    const selectMonth = this.state.selectMonth;
    const selectDay = this.state.selectDay;

    return (
      <div>
        <TitleArea stepNumber="STEP1" titleText="お客様の情報を入力してください" />
        <div>
          <p>-性別-</p>
          <input type="radio" id="radio-men-id" name="sex" value="men" checked={radioBtnSex === '男性'} onChange={this.changeRadioBtn} />
          <label htmlFor="radio-men-id">男性</label>
          <input type="radio" id="radio-women-id" name="sex" value="women" checked={radioBtnSex === '女性'} onChange={this.changeRadioBtn} />
          <label htmlFor="radio-women-id">女性</label>

          <p>-生年月日-</p>
          <div className="form-select-box">
            <span className="form-select">
              <select className="birthday-year dropdown-toggle" defaultValue="1930">
                {/*1930-2021まで */}
                {
                  selectYear.map((year, index) => {
                    return <option key={index}  value={year}>{year} 年</option>
                  })
                }
              </select>
            </span>
            /
            <span className="form-select">
              <select className="birthday-month dropdown-toggle" defaultValue="1" onChange={this.handleMonthChange}>
                {/*1-12まで */}{
                  selectMonth.map((month, index) => {
                    return <option key={index} value={month}>{month} 月</option>
                  })
                }
              </select>
            </span>
            /
            <span className="form-select">
              <select className="birthday-day dropdown-toggle" defaultValue="1">
                {/*1-31まで */}
                {
                  selectDay.map((day, index) => {
                    return <option key={index} value={day}>{day} 日</option>
                  })
                }
              </select>
            </span>
            <LinkSetting nextPage="/Questions" />
          </div>
        </div>
      </div>
    );
  }
}
