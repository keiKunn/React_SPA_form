// storeのstateを変更する

// actionsファイル内のexportモジュールを使用できるようにする
import * as Actions from './actions'
import initialState from '../store/initialState'

// 第一引数：state
// 第二引数：actionがreturnした値
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.USERINFO_PUSH_NEXT:
      // stateが展開されたものと、acion.payloadが展開されたものが返却される
      // stateを展開することでundefineと上書きされないようにしている
      return {
        ...state,
        ...action.payload
      }
      default:
        return state
  }
}