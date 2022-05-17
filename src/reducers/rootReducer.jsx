import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
	login: loginReducer
});


export default rootReducer;