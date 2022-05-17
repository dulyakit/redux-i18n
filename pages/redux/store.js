import { syncTranslationWithStore, loadTranslations, setLocale } from 'react-redux-i18n'
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer'
import translationObject from '../locales'
import { composeWithDevTools } from 'redux-devtools-extension';

const initStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
    syncTranslationWithStore(store)
    store.dispatch(loadTranslations(translationObject))
    store.dispatch(setLocale('th'))
    return store
}

const wrapper = createWrapper(initStore)
export default wrapper