import { combineReducers } from 'redux'
import { i18nReducer } from "react-redux-i18n";
import counterReducer from './counterReducer';

export default combineReducers({
    i18n: i18nReducer,
    all: counterReducer
})