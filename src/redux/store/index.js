import { combineReducers, createStore } from "redux";
import { expenceReducer } from "../reducers/expences";
import { createSelectorHook, createStoreHook } from "react-redux";

const reducer = combineReducers({
    expences:expenceReducer,
})
const initialState ={}
const store = createStore(reducer , initialState)

export default store;