import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	auth: false,
	error: null,
	token: false
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		sendCreds: (state, { payload }) => {
			state.auth = true;
			console.log(state, payload);
		}
	}
});

export const { 
	sendCreds
} = loginSlice.actions;

export default loginSlice.reducer;

