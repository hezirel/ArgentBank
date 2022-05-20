import {
	createSlice
} from "@reduxjs/toolkit";

const initialState = {
	auth: false,
	token: false
};

const loginSlice = createSlice({
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
	},
	extraReducers: {

	}
});

export const { 
	sendCreds,
	requestProfile
} = loginSlice.actions;

export default loginSlice.reducer;

