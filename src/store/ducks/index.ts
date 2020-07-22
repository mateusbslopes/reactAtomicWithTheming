import person from './person'
import theme from './theme'
import { createStore, combineReducers } from 'redux'

export default createStore(combineReducers({ person, theme }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())