import * as Actions from './actions'
import initialState from '../store/initialState'

// 第一引数：state
// 第二引数：actionがreturnした値
export const AnswersReducer = (state = initialState.answers, action) => {
  switch (action.type) {
    case Actions.QUESTIONS_PUSH_NEXT:
      return {
        ...state,
        ...action.payload
      }
      default:
        return state
  }
}