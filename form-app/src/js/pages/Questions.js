import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleArea from "../components/TitleArea";
import { useDispatch, useSelector } from "react-redux";
import { pushQuestionsNextAction } from '../reducks/answers/actions'
import { QuestionNo1, QuestionNo2, QuestionNo3 } from '../define/QuestrionText'
import 'bulma/css/bulma.css'

export default function Questions() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log("Questions.jsコンポーネントselector");
  console.log(selector.answers);

  // 質問数
  const questionNum = 3;
  // 各門の回答フラグ（回答済：true）
  const [questionNo1AnsweredFlg, setQuestionNo1AnsweredFlg] = useState(false);
  const [questionNo2AnsweredFlg, setQuestionNo2AnsweredFlg] = useState(false);
  const [questionNo3AnsweredFlg, setQuestionNo3AnsweredFlg] = useState(false);
  // ラジオボタン要素
  const [displayQuestions, setDisplayQuestions] = useState(
    [
      {
        option: [
          { radioName: 'yes-radio-Q1', radioValue: 'はい', selected: false },
          { radioName: 'no-radio-Q1', radioValue: 'いいえ', selected: false }
        ]
      }
    ]);

  // 回答結果
  const [answerNo1, setAnswerNo1] = useState(selector.answers.answerNo1);
  const [answerNo2, setAnswerNo2] = useState(selector.answers.answerNo2);
  const [answerNo3, setAnswerNo3] = useState(selector.answers.answerNo3);

  /**
  *  ラジオボタン選択時のイベント
  *  ・各アンケート別に選択結果をstateに保持
  *  ・次のアンケートを表示
  */
  const handleChangeRadioBtn = (e) => {
    const choicedRadioId = e.target.id;
    const choicedRadioName = e.target.name;
    const choicedRadioValue = e.target.value;

    // ★
    //const copyDisplayQuestions = displayQuestions;
    // 押下時に次のエラー：ReferenceError: Cannot access 'displayQuestions' before initialization

    // ラジオボタンが押下されたことをstateに保存
    if (Number(choicedRadioId) === 1) {
      setQuestionNo1AnsweredFlg(true);
    } else if (Number(choicedRadioId) === 2) {
      setQuestionNo2AnsweredFlg(true);
    } else if (Number(choicedRadioId) === 3) {
      setQuestionNo3AnsweredFlg(true);
    }

    // チェックされたラジオボタンのstateを記録
    displayQuestions.forEach(cpDisplayQuestion => {
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
          // 選択結果をstateにセット
          setAnswer(choicedRadioId, choicedRadioValue);
        }
      }
    });

    let addDisplayQuestions = [];
    const nextQuestionNumber = displayQuestions.length + 1;
    // 最後に表示されたアンケートのラジオボタンが押下された場合 かつ
    // クラス変数-questionNumで設定したアンケート数より少ない場合、アンケート追加
    if (displayQuestions.length === Number(choicedRadioId)
      && displayQuestions.length < questionNum) {
      addDisplayQuestions = [{
        option: [
          { radioName: `yes-radio-Q${nextQuestionNumber}`, radioValue: 'はい', selected: false },
          { radioName: `no-radio-Q${nextQuestionNumber}`, radioValue: 'いいえ', selected: false }
        ]
      }];
    }
    const newDisplayQuestions = [...displayQuestions, ...addDisplayQuestions]
    setDisplayQuestions(newDisplayQuestions);
  }

  /**
  *  ラジオボタンの回答結果をstateにセットする
  */
  const setAnswer = (choicedRadioId, choicedRadioValue) => {
    if (1 === Number(choicedRadioId)) {
      setAnswerNo1(choicedRadioValue);
    } else if (2 === Number(choicedRadioId)) {
      setAnswerNo2(choicedRadioValue);
    } else if (3 === Number(choicedRadioId)) {
      setAnswerNo3(choicedRadioValue);
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
              <p key={i}>{QuestionNo1}</p>
            }
            {/* アンケート１が回答済 */}
            {i === 1 && questionNo1AnsweredFlg && (
              <p key={i}>{QuestionNo2}</p>
            )}
            {/* アンケート２が回答済 */}
            {i === 2 && questionNo2AnsweredFlg && (
              <p key={i}>{QuestionNo3}</p>
            )}

            {/* ラジオボタン表示 */}
            {
              displayQuestion.option.map((radio, j) => {
                return <div>
                  <input key={j} type="radio" id={i + 1} name={radio.radioName} value={radio.radioValue} checked={radio.selected} onChange={handleChangeRadioBtn} />
                  <label htmlFor={radio.radioName}>{radio.radioValue}</label>
                </div>
              })
            }
          </div>
        })
      }
      <Link to="/"><button class="button is-primary">前へ戻る</button></Link>
      <Link to="/Consultation">
        <button class="button is-primary" onClick={() => dispatch(pushQuestionsNextAction({
          answerNo1: answerNo1,
          answerNo2: answerNo2,
          answerNo3: answerNo3
        }))}>次へ進む</button>
      </Link>
    </div>
  );
}
