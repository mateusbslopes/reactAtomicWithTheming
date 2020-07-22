import person from "./person"
import { createStore, combineReducers } from "redux"

export default createStore(combineReducers({ person }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())