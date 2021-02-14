// reducersでacctionを判別する際に使用するため、export
export const QUESTIONS_PUSH_NEXT = "QUESTIONS_PUSH_NEXT";

// returnでreducersにpayloadのデータを渡す
export const pushQuestionsNextAction = (answerState) => {
  return {
    type: QUESTIONS_PUSH_NEXT,
    payload: {
      answerNo1: answerState.answerNo1,
      answerNo2: answerState.answerNo2,
      answerNo3: answerState.answerNo3
    }
  }
}


