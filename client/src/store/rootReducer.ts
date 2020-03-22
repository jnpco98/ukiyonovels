import { combineReducers } from "redux";
import novelsReducer from "./novel/reducer";

const rootReducer = combineReducers({ novels: novelsReducer });

export default rootReducer;