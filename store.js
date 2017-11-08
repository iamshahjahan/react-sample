import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import StartStopReducer from "./StartStopReducer";


const store = createStore(combineReducers({StartStopReducer}),{},applyMiddleware(thunk));


export default store;
