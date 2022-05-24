import {
	createSlice
} from "@reduxjs/toolkit";

import {
	api
} from "../../services/userApi";

const initialState = {
	token: false,
	userInfos: false,
	err: false
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		logout: (state) => {
			state.token = false;
			state.userInfos = false;
			return state;
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			api.endpoints.getLogin.matchFulfilled,
			(state, action) => {
				state.token = action.payload.body.token;
			})
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
	logout
} = loginSlice.actions;