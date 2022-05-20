import {
	createApi,
} from "@reduxjs/toolkit";

import { 
	fetchBaseQuery
} from "@reduxjs/toolkit/dist/query";

const initialState = {
	auth: false,
	token: false
};

const loginSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: URL}),
	name: "login",
	initialState,
	reducers: {
		sendCreds: (state, { payload }) => {
			state.auth = true;
			console.log(payload);
		},
		requestProfile: (state, { payload }) => {
			state.token = payload;
		}
	}
});

export const { 
	sendCreds,
	requestProfile
} = loginSlice.actions;

export default loginSlice.reducer;

