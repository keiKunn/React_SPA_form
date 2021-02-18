// Actionsのファイルにはstoreに受け渡すdataのみを記載する

// reducersでacctionを判別する際に使用するため、export
export const USERINFO_PUSH_NEXT = "USERINFO_PUSH_NEXT";

// returnでreducersにpayloadのデータを渡す
export const pushUsersInfoNextAction = (userState) => {
  return {
    type: USERINFO_PUSH_NEXT,
    payload: {
      sex: userState.sex,
      year: userState.year,
      month: userState.month,
      day: userState.day
    }
  }
}


