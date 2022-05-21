import { combineReducers } from "@reduxjs/toolkit";

import login from "../features/login/loginSlice";
import { api } from "../services/userApi";

const rootReducer = combineReducers({
	login: login.reducer,
	[api.reducerPath]: api.reducer
});


export default rootReducer;