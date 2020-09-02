//アプリケーション内に存在するreducerを総括・結合する
//結合をする部品がreducerにあるので使う
import { combineReducers } from 'redux'
import count from './count' // カウントアプリの状態を管理するreducer

export default combineReducers({count})