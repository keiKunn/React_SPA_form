import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './js/reducks/store/store'
import App from './App';
import Header from './js/components/Header'
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.css'

// storeとReactアプリの接続
export const store = createStore(); //ここでstoreが作られる

// ProviderコンポーネントでAppをラッピング
// Providerとは
// ●propsにstoreを渡す 
//    →ラップしたAppコンポーネントにstoreの情報を渡す
//     （Appの中でstoreを参照できるようにする。
//       react-reduxのconnect関数を使えるようにする。）
// connect関数：ReactとReduxを接続してstoreを変更できるようにする。
ReactDOM.render(
  <Provider store={store} >
    <Header />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
