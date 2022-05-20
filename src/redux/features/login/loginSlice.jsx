import {
	createApi,
} from "@reduxjs/toolkit";

import axios from "axios";

const URL = "http://192.168.0.52:3001/api/v1/user/";

const axiosBaseQuery = 
	({ baseUrl }) =>
		async ({uri, method, data, params}) => {
			try {
				const response = await axios({
					url: `${baseUrl}${uri}`,
					method,
					data,
					params,
				});
				return response.data;
			} catch (error) {
				return {
					error: {
						status: error.response?.status,
						message: error.response?.data,
					}
				};
			}
		};

const initialState = {
	auth: false,
	token: false
};

const loginSlice = createApi({
	baseQuery: axiosBaseQuery({ baseUrl: URL}),
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

