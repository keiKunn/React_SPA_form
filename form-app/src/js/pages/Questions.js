import React from "react";
import LinkSetting from "../components/LinkSetting";
import TitleArea from "../components/TitleArea";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.questionNum = 3;
    this.state = {
      displayQuestions: [
        {
          answerFlg: false,
          option: [
            { radioName: 'yes-radio-Q1', radioValue: 'はい', selected: false },
            { radioName: 'no-radio-Q1', radioValue: 'いいえ', selected: false }
          ]
        }
      ]
    };
  }

  /**
  *  ラジオボタン選択時のイベント
  *  ・各アンケート別に選択結果をstateに保持
  *  ・次のアンケートを表示
  */
  changeRadioBtn = (e) => {
    const choicedRadioName = e.target.name;
    const choicedRadioValue = e.target.value;

    const copy_displayQuestions = this.state.displayQuestions.slice();

    // チェックされたラジオボタンのstateを記録
    copy_displayQuestions.forEach(cp_displayQuestion => {
      for (let index = 0; index < cp_displayQuestion.option.length; index++) {
        // どのアンケートのラジオボタンが押されたかを判定
        if (choicedRadioName === cp_displayQuestion.option[index].radioName) {
          // 回答済みフラグを立てる
          cp_displayQuestion.answerFlg = true;
          // ラジオボタンの選択切替
          if (choicedRadioValue === 'はい') {
            cp_displayQuestion.option[0].selected = true;
            cp_displayQuestion.option[1].selected = false;
          } else if (choicedRadioValue === 'いいえ') {
            cp_displayQuestion.option[0].selected = false;
            cp_displayQuestion.option[1].selected = true;
          }
        }
      }
    });

    let add_displayQuestions = [];
    const nextQuestionNumber = copy_displayQuestions.length + 1;
    // クラス変数-questionNumで設定したアンケート数より少ない場合、アンケート追加
    if (copy_displayQuestions.length < this.questionNum) {
      add_displayQuestions = [{
        answerFlg: false,
        option: [
          { radioName: `yes-radio-Q${nextQuestionNumber}`, radioValue: 'はい', selected: false },
          { radioName: `no-radio-Q${nextQuestionNumber}`, radioValue: 'いいえ', selected: false }
        ]
      }];
    }
    const displayQuestions = [...copy_displayQuestions, ...add_displayQuestions]
    this.setState({ displayQuestions });
  }

  render() {
    const displayQuestions = this.state.displayQuestions;
    // アンケート回答フラグ(回答済：true)
    // 回答済みの場合、次のアンケート文を表示する
    let answerFlg_1 = false;
    let answerFlg_2 = false;
    for (let i = 0; i < displayQuestions.length; i++) {
      if (i === 0) {
        answerFlg_1 = displayQuestions[i].answerFlg;
      } else if (i === 1) {
        answerFlg_2 = displayQuestions[i].answerFlg;
      }
    }

    return (
      <div>
        <TitleArea stepNumber="STEP2" titleText="以下にお答えください" />
        {
          displayQuestions.map((displayQuestion, i) => {
            return <div>
              {/* アンケート１ */}
              {i === 0 &&
                <p key={i}>現在、生命保険に加入されていますか？</p>
              }
              {/* アンケート１が回答済 */}
              {i === 1 && answerFlg_1 && (
                <p key={i}>現在入院中ですか。または、最近３カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
              )}
              {/* アンケート２が回答済 */}
              {i === 2 && answerFlg_2 &&(
                <p key={i}>過去５年以内に病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</p>
              )}

              {/* ラジオボタン表示 */}
              {
                displayQuestion.option.map((radio, j) => {
                  return <div>
                    <input key={j} type="radio" id={i + 1} name={radio.radioName} value={radio.radioValue} checked={radio.selected} onChange={this.changeRadioBtn} />
                    <label htmlFor={radio.radioName}>{radio.radioValue}</label>
                  </div>
                })
              }
            </div>
          })
        }
        <LinkSetting backPage="/" nextPage="/Consultation" />
      </div>
    );
  }
}
