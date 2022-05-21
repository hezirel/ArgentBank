import {
	createSlice
} from "@reduxjs/toolkit";

import {
	api
} from "../../services/userApi";

const initialState = {
	auth: false,
	token: false,
	userInfos: false,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			api.endpoints.getLogin.matchFulfilled,
			(state, action) => {
				state.auth = true;
				state.token = action.payload.body.token;
			}
		)
			.addMatcher(
				api.endpoints.getProfile.matchFulfilled,
				(state, action) => {
					state.userInfos = action.payload.body;
				}
			);
	}
});

export default loginSlice;
export const {
	login
} = loginSlice.actions;