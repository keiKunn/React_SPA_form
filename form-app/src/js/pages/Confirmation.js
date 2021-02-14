import React, { useState } from "react";
import TitleArea from "../components/TitleArea";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QuestionNo1, QuestionNo2, QuestionNo3 } from '../define/QuestrionText'

export default function Confirmation() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log("確認ページ selector");
  console.log(selector);

  // 表示内容取得
  // 性別
  const radioBtnSex = selector.users.sex;

  // 生年月日
  const year= selector.users.year;
  const month = selector.users.month;
  const day = selector.users.day;
  // 回答結果
  const answerNo1 = selector.answers.answerNo1;
  const answerNo2 = selector.answers.answerNo2;
  const answerNo3 = selector.answers.answerNo3;
  // 相談内容  
  const consultaionContent = selector.consultation.content;

  return (
    <div>
      <TitleArea stepNumber="STEP4" titleText="以下の内容をご確認ください" />
      <div>
        -- 性別 --
        <p>{radioBtnSex}</p>
      </div>
      <div>
        -- 生年月日 --
        <p>{year}/{month}/{day}</p>
      </div>
      <div>
        -- {QuestionNo1} --
        <p>{answerNo1}</p>
      </div>
      <div>
        -- {QuestionNo2} --
        <p>{answerNo2}</p>
      </div>
      <div>
        -- {QuestionNo3} --
        <p>{answerNo3}</p>
      </div>
      <div>
        -- ご相談内容 --
        <p>{consultaionContent}</p>
      </div>
      <Link to="/Consultation"><button>前へ戻る</button></Link>　
      <button >送信</button>
    </div>
  );
}