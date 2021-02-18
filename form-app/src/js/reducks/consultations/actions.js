// reducersでacctionを判別する際に使用するため、export
export const CONSULTATIONS_PUSH_NEXT = "CONSULTATIONS_PUSH_NEXT";

// returnでreducersにpayloadのデータを渡す
export const pushConsultationsNextAction = (consultationState) => {
  return {
    type: CONSULTATIONS_PUSH_NEXT,
    payload: {
      content: consultationState.content
    }
  }
}


