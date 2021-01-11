import React from "react";

export default class UseInfo extends React.Component {

  render() {
    const radioBtn = '男性';
    const userBirthdayYear = document.querySelector('.user-birthday-year');
    const userBirthdayMonth = document.querySelector('.user-birthday-month');
    const userBirthdayDay = document.querySelector('.user-birthday-day');
    // 1930年代から2021年代までoption要素を生成
    for (var i = 1930; i <= 2021; i++) {
      createElementsForOptions(userBirthdayYear, i);
    }
    // 1月から12月までのoption要素を生成
    for (var j = 1; j <= 12; j++) {
      createElementsForOptions(userBirthdayMonth, j);
    }
    // 1日から31日までのoption要素を生成
    // ※デフォルトでは1月が選択されているため31
    for (var k = 1; k <= 31; k++) {
      createElementsForOptions(userBirthdayDay, k);
    }

    // 日付の数は月によって変わるので動的に変えるようにする 
    userBirthdayMonth.addEventListener('change', () => {
      var days = createDaysForOptions(userBirthdayMonth);

      // 前回までで生成されたoptionを消去
      removeDaysElementsForOptions();
      // 月に応じた月の日付けoption要素を生成
      for (var l = 1; l <= days; l++) {
        createElementsForOptions(userBirthdayDay, l);
      }
    });

    return (
      <div>
        <div>
          STEP1
          <p>お客様の情報を入力してください</p>
        </div>
        <div>
          <p>-性別-</p>
          <input type="radio" id="radio-men-id" name="sex" value="men" checked={radioBtn === '男性'} />
          <label htmlFor="radio-men-id">男性</label>
          <input type="radio" id="radio-women-id" name="sex" value="women" checked={radioBtn === '女性'} />
          <label htmlFor="radio-women-id">女性</label>

          <p>-生年月日-</p>
          <div class="form-select-box">
            <div class="form-select">
              <select class="birthday-year dropdown-toggle">
                {/*1930-2021まで */}
              </select>
            </div>
            /
            <div class="form-select">
              <select class="birthday-month dropdown-toggle">
                {/*1-12まで */}
              </select>
            </div>
            /
            <div class="form-select">
              <select class="birthday-day dropdown-toggle">
                {/*1-31まで */}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * 月が変わったら日のoption要素の値を変える
 *
 * @param int el userBirthdayMonth
 */
function createDaysForOptions(el) {
  const indexKey = el.selectedIndex;
  const mouth = {
    1: 31, 2: 29, 3: 31, 4: 30,
    5: 31, 6: 30, 7: 31, 8: 31,
    9: 30, 10: 31, 11: 30, 12: 31,
  }

  // 要素がずれるので+1をする
  return mouth[indexKey + 1];
}

/**
 * selectボックスのoption要素を生成する
 * @param int el element
 * @param int val value
 */
function createElementsForOptions(el, val) {
  const op = document.createElement('option');
  op.value = val;
  op.text = val;
  el.appendChild(op);
}

function removeDaysElementsForOptions() {
  const birthday = document.getElementsByClassName('user-birthday-day');
  return birthday[0].innerHTML = '';
}

