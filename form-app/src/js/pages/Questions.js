import React from "react";
import LinkSetting from "../components/LinkSetting";
import TitleArea from "../components/TitleArea";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.questions = [
      '現在、生命保険に加入されていますか？',
      '現在入院中ですか。または、最近３カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？',
      '過去５年以内に病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？'
    ]

    this.state = {
      displayQuestions: [
        {
          question: this.questions[0],
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
    const choicedId = e.target.id;
    const choicedRadioName = e.target.name;
    const choicedRadioValue = e.target.value;

    const copy_displayQuestions = this.state.displayQuestions.slice();

    // チェックされたラジオボタンのstateを記録
    copy_displayQuestions.forEach(cp_displayQuestion => {
      for (let index = 0; index < cp_displayQuestion.option.length; index++) {
        // どのアンケートのラジオボタンが押されたかを判定
        if (choicedRadioName === cp_displayQuestion.option[index].radioName) {
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
    // questionsの最大値を超えていない
    // かつ、押下されたラジオボタンが表示中最後のアンケートのものである場合、アンケートを追加表示
    if (nextQuestionNumber <= this.questions.length && 
        Number(choicedId) === copy_displayQuestions.length) {
      add_displayQuestions = [{
        question: this.questions[nextQuestionNumber - 1],
        option: [
          { radioName: `yes-radio-Q${nextQuestionNumber}`, radioValue: 'はい', selected: false },
          { radioName: `no-radio-Q${nextQuestionNumber}`, radioValue: 'いいえ', selected: false }
        ]
      }];
    }

    const displayQuestions = [...copy_displayQuestions, ...add_displayQuestions]
    console.log("追加後" + displayQuestions);
    this.setState({ displayQuestions });
  }

  render() {
    const displayQuestions = this.state.displayQuestions;
    return (
      <div>
        <TitleArea stepNumber="STEP2" titleText="以下にお答えください" />
        {
          displayQuestions.map((displayQuestion, i) => {
            return <div>
              <p key={i}>{displayQuestion.question}</p>
              {
                displayQuestion.option.map((radio, j) => {
                  return <div>
                    <input key={j} type="radio" id={i+1} name={radio.radioName} value={radio.radioValue} checked={radio.selected} onChange={this.changeRadioBtn} />
                    <label htmlFor={radio.radioName}>{radio.radioValue}</label>
                  </div>
                })
              }
            </div>
          })
        }
        <LinkSetting backPage="/" nextPage="/Consultation"/>
      </div>
    );
  }
}
