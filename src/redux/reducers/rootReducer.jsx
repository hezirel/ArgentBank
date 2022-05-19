import { combineReducers } from "@reduxjs/toolkit";

import login from "../features/login/loginSlice";

const rootReducer = combineReducers({
	login
});


export default rootReducer;