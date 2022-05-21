import {
	createSlice
} from "@reduxjs/toolkit";

import {
	api
} from "../../services/userApi";

const initialState = {
	auth: false,
	token: false
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			api.endpoints.getAuth.matchFulfilled,
			(state, action) => {
				state.auth = true;
				state.token = action.payload.body.token;
			}
		);
	}
});

export default loginSlice;
export const {
	login
} = loginSlice.actions;