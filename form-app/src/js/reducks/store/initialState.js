import { SelectYear, SelectMonth, SelectDay } from "../../define/SelectBirthDay";

// Storeの初期状態
// アプリに必要なstateをすべて記述する
// ここで定義したカテゴリごとにディレクトリ作ってあげるといい。その中にactionsだったりreducersを格納。redux-pattern

const initialState = {
 users : {
    sex: '',
    year: SelectYear[0],
    month: SelectMonth[0],
    day: SelectDay[0]
  },
  answers : {
    answerNo1:'',
    answerNo2:'',
    answerNo3:''
  },
  consultation : {
    content:''
  }
};

export default initialState;