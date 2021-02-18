import React, { useState } from "react";
import TitleArea from "../components/TitleArea";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pushConsultationsNextAction } from '../reducks/consultations/actions'

export default function Consultation() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [consultaionContent, setConsultaionContent] = useState(selector.consultation.content);

  // 相談内容をstateにセット
  const handleChangeContent = (e) => {
    //setConsultaionContent({ content: e.target.value }) ★この書き方だと、content:{content:e.target.value}と入れ子で作られてしまう。
    setConsultaionContent(e.target.value);
  }

  return (
    <div>
      <TitleArea stepNumber="STEP3" titleText="ご相談内容をご記入ください" />
      <div>
        -- ご相談内容 --
      </div>
      <textarea onChange={handleChangeContent}>
        {consultaionContent}
      </textarea>
      <div>
        <Link to="/Questions"><button>前へ戻る</button></Link>
        <Link to="/Confirmation">
          <button onClick={() => dispatch(pushConsultationsNextAction({
            content: consultaionContent
          }))}>次へ進む</button>
        </Link>
      </div>
    </div>
  );
}