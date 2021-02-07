import React from "react";
import LinkSetting from "../components/LinkSetting";
import TitleArea from "../components/TitleArea";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.questionNum = 3;
    this.state = {
      questionNo1AnsweredFlg: false,
      questionNo2AnsweredFlg: false,
      questionNo3AnsweredFlg: false,
      displayQuestions: [
        {
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
    const choicedRadioId = e.target.id;
    const choicedRadioName = e.target.name;
    const choicedRadioValue = e.target.value;

    const copyDisplayQuestions = this.state.displayQuestions.slice();

    // ラジオボタンが押下されたことをstateに保存
    if (Number(choicedRadioId) === 1) {
      this.state.questionNo1AnsweredFlg = true;
    } else if (Number(choicedRadioId) === 2) {
      this.state.questionNo2AnsweredFlg = true;
    } else if (Number(choicedRadioId) === 3) {
      this.state.questionNo3AnsweredFlg = true;
    }

    // チェックされたラジオボタンのstateを記録
    copyDisplayQuestions.forEach(cpDisplayQuestion => {
      for (let index = 0; index < cpDisplayQuestion.option.length; index++) {
        // どのアンケートのラジオボタンが押されたかを判定
        if (choicedRadioName === cpDisplayQuestion.option[index].radioName) {
          // ラジオボタンの選択切替
          if (choicedRadioValue === 'はい') {
            cpDisplayQuestion.option[0].selected = true;
            cpDisplayQuestion.option[1].selected = false;
          } else if (choicedRadioValue === 'いいえ') {
            cpDisplayQuestion.option[0].selected = false;
            cpDisplayQuestion.option[1].selected = true;
          }
        }
      }
    });

    let addDisplayQuestions = [];
    const nextQuestionNumber = copyDisplayQuestions.length + 1;
    // 最後に表示されたアンケートのラジオボタンが押下された場合 かつ
    // クラス変数-questionNumで設定したアンケート数より少ない場合、アンケート追加
    if (copyDisplayQuestions.length === Number(choicedRadioId)
      && copyDisplayQuestions.length < this.questionNum) {
      addDisplayQuestions = [{
        option: [
          { radioName: `yes-radio-Q${nextQuestionNumber}`, radioValue: 'はい', selected: false },
          { radioName: `no-radio-Q${nextQuestionNumber}`, radioValue: 'いいえ', selected: false }
        ]
      }];
    }
    const displayQuestions = [...copyDisplayQuestions, ...addDisplayQuestions]
    this.setState({ displayQuestions });
  }

  render() {
    const questionNo1AnsweredFlg = this.state.questionNo1AnsweredFlg;
    const questionNo2AnsweredFlg = this.state.questionNo2AnsweredFlg;
    const displayQuestions = this.state.displayQuestions;
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
              {i === 1 && questionNo1AnsweredFlg && (
                <p key={i}>現在入院中ですか。または、最近３カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
              )}
              {/* アンケート２が回答済 */}
              {i === 2 && questionNo2AnsweredFlg && (
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
