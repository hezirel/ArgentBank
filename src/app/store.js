import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: (state = {token: false, auth: false}, action) => {
		switch (action.type) {

		case "LOGIN": return {...state, auth: true, token: action.payload};
		case "LOGOUT": return {...state, token: false, auth: false};

		default: return state;
		}
	}
});