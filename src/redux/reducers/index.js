import { combineReducers } from 'redux'
import list from './listReducer'
import stats from './statsReducer'

export default combineReducers({ list, stats })
