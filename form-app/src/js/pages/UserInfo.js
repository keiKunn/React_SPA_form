import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleArea from "../components/TitleArea";
import { useDispatch, useSelector } from "react-redux";
import { pushUsersInfoNextAction } from '../reducks/users/actions'
import { SelectYear, SelectMonth, SelectDay } from "../define/SelectBirthDay";
import 'bulma/css/bulma.css'

export default function UserInfo() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log("UserInfoコンポーネント");
  console.log(selector.users);

  // storeのstateから値を取得し、UserInfoコンポーネントのstateにセット
  // 性別
  const [radioBtnSex, setRadioBtnSex] = useState(selector.users.sex);
  // 生年月日
  const [year, setYear] = useState(selector.users.year);
  const [month, setMonth] = useState(selector.users.month);
  const [day, setDay] = useState(selector.users.day);

  // 入力フォーム値生成
  const selectYear = SelectYear;
  const selectMonth = SelectMonth;
  const [selectDay, setSelectDay] = useState(SelectDay);

  /**
   *  ラジオボタン選択
   */
  const handleChangeRadioBtn = (e) => {
    const choicedBtn = e.target.value;
    // 表示切替
    let radioBtnState;
    if (choicedBtn === 'men') {
      radioBtnState = '男性';
    } else if (choicedBtn === 'women') {
      radioBtnState = '女性';
    }
    // 表示タスクをset
    setRadioBtnSex(radioBtnState);
  }

  /**
   *  選択年をstateにセットする
   */
  const handleChangeYear = (e) => {
    const year = e.target.value;
    setYear(Number(year));
  }

  /**
   *  選択月に対応する日数をセットする
   *  選択月をstateにセットする
   */
  const handleChangeMonth = (e) => {
    const monthKey = e.target.value;
    const month = {
      1: 31, 2: 29, 3: 31, 4: 30,
      5: 31, 6: 30, 7: 31, 8: 31,
      9: 30, 10: 31, 11: 30, 12: 31,
    }

    // 選択された月の日数を取得
    const newDays = month[monthKey];
    const days = [];
    // 日数を新しくセット
    for (let i = 1; i <= newDays; i++) {
      days.push(i);
    }

    // ★選択前の日>選択後の日数の場合、stateのdayに「1」をセットする(この場合、defaultvalue:1は表示されるが、stateが更新されなかったため)
    const selectDays = document.getElementById("selectDays");
    // 選択値のindexを取得
    const selectedIdx = selectDays.selectedIndex;
    const oldDay = Number(selectDays.options[selectedIdx].value);
    if (oldDay > days.length) {
      setDay(1);
    }

    // 日一覧を更新
    setSelectDay(days);
    // 選択月stateを更新
    setMonth(Number(monthKey));
  }

  /**
   *  選択日をstateにセットする
   */
  const handleChangeDay = (e) => {
    const day = e.target.value;
    setDay(Number(day));
  }

  return (
    <div>
      <section className="section">
      <div className="container box">
        <div className="notification is-primary">
          <TitleArea stepNumber="STEP1" titleText="お客様の情報を入力してください" />
        </div>
        <div>
          <div className="content has-text-info">-性別-</div>
          <div className="content control">
            <label className="radio">
              <input type="radio" id="radio-men-id" name="sex" value="men" checked={radioBtnSex === '男性'} onChange={handleChangeRadioBtn} />
              男性
          </label>
            <label className="radio">
              <input type="radio" id="radio-women-id" name="sex" value="women" checked={radioBtnSex === '女性'} onChange={handleChangeRadioBtn} />
              女性
          </label>
          </div>

          <div className="content has-text-info">-生年月日-</div>
          <div className="content">
            <span className="select">
              <select className="birthday-year dropdown-toggle" defaultValue="1930" onChange={handleChangeYear}>
                {/*1930-2021まで */}
                {
                  selectYear.map((year, index) => {
                    return <option key={index} value={year}>{year} 年</option>
                  })
                }
              </select>
            </span>　

            <span className="select">
              <select className="birthday-month dropdown-toggle" defaultValue="1" onChange={handleChangeMonth}>
                {/*1-12まで */}{
                  selectMonth.map((month, index) => {
                    return <option key={index} value={month}>{month} 月</option>
                  })
                }
              </select>
            </span>　

            <span className="select">
              <select id="selectDays" className="birthday-day dropdown-toggle" defaultValue="1" onChange={handleChangeDay}>
                {/*1-31まで */}
                {
                  selectDay.map((day, index) => {
                    return <option key={index} value={day}>{day} 日</option>
                  })
                }
              </select>
            </span>
          </div>
        </div>
      </div>
      </section>
      <section className="section">
      <div className="columns is-centered">
        <Link to="/Questions">
          <button class="button is-primary columns is-half" onClick={() => dispatch(pushUsersInfoNextAction({
            sex: radioBtnSex,
            year: year,
            month: month,
            day: day
          }))}>次へ進む</button>
        </Link>
      </div>
      </section>
    </div>
  );
}
