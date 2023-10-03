import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";

let rootReducer = combineReducers({
	counter: counterReducer,
});
export let myStore = createStore(rootReducer);
