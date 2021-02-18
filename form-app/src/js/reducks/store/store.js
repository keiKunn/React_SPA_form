// StoreとReducersを関連付ける
import {
  createStore as reduxCreateStore,
  combineReducers
} from 'redux';
import {UsersReducer} from '../users/reducers';
import {AnswersReducer} from '../answers/reducers';
import {ConsultationReducer} from '../consultations/reducers';

export default function createStore(){
  return reduxCreateStore( // reduxのcreateStoreの別名
    
    // combineReducersでstateを生成している
    // stateで管理したいカテゴリと、それに対応するreducerを指定。
    // reducersで定義したUsersReducerを記載,アプリケーション起動時はinitialStateが渡る(reducersでそのように定義しているため)
    // 「このアプリケーションで何のstateを管理しているのか、初期状態は何なのか」を提示しているイメージ。
    combineReducers({
      users: UsersReducer,
      answers: AnswersReducer,
      consultation: ConsultationReducer
    })
  )
}

// StoreとReactアプリの接続
// src/index.jsに、｛Provider｝from 'react-redux'とstoreで定義したcreatStoreをimport