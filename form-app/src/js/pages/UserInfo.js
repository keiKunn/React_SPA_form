import React from "react";

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

  //   /**
  //   * 月が変わったら日のoption要素の値を変える
  //   *
  //   * @param int el userBirthdayMonth
  //   */
  // function createDaysForOptions(el) {
  //   const indexKey = el.selectedIndex;
  //   const mouth = {
  //     1: 31, 2: 29, 3: 31, 4: 30,
  //     5: 31, 6: 30, 7: 31, 8: 31,
  //     9: 30, 10: 31, 11: 30, 12: 31,
  //   }

  //   // 要素がずれるので+1をする
  //   return mouth[indexKey + 1];
  // }

  // /**
  //  * 月が変わったら日のoption要素の値を変える
  //  *
  //  * @param int el userBirthdayMonth
  //  */
  // function createDaysForOptions(el) {
  //   const indexKey = el.selectedIndex;
  //   const mouth = {
  //     1: 31, 2: 29, 3: 31, 4: 30,
  //     5: 31, 6: 30, 7: 31, 8: 31,
  //     9: 30, 10: 31, 11: 30, 12: 31,
  //   }

  //   // 要素がずれるので+1をする
  //   return mouth[indexKey + 1];
  // }

  render() {
    const radioBtnSex =this.state.radioBtnSex;
    const selectYear = this.state.selectYear;
    const selectMonth = this.state.selectMonth;
    const selectDay = this.state.selectDay;
    console.log("render");

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
            <div className="form-select">
              <select className="birthday-year dropdown-toggle">
                {/*1930-2021まで */}
                {
                  selectYear.map((year, index) => {
                    if(year === 1990){
                      // 初期値設定
                      return <option key={index} value={year} selected>{year} 年</option>
                    }
                    return <option  key={index} value={year}>{year} 年</option>
                  })
                }
              </select>
            </div>
            /
            <div className="form-select">
              <select className="birthday-month dropdown-toggle">
                {/*1-12まで */}{
                  selectMonth.map((month, index) => {
                    if(month === 1){
                      // 初期値設定
                      return <option key={index} value={month} selected>{month} 月</option>
                    }
                    return <option key={index} value={month}>{month} 月</option>
                  })
                }
              </select>
            </div>
            /
            <div className="form-select">
              <select className="birthday-day dropdown-toggle">
                {/*1-31まで */}
                {
                  selectDay.map((day, index) => {
                    if(day === 1){
                      // 初期値設定
                      return <option  key={index} value={day} selected>{day} 日</option>
                    }
                    return <option  key={index} value={day}>{day} 日</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
