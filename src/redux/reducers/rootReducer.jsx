import { combineReducers } from "@reduxjs/toolkit";

import { 
	loginReducer as login,
} from "./loginReducer";

const rootReducer = combineReducers({
	login
});


export default rootReducer;