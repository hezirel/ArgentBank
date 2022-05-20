import {
	createApi,
	fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

const URL = "http://192.168.0.52:3001/api/v1/user/";

export const api = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ baseUrl: URL}),
	endpoints: (builder) => ({

		getAuth: builder.mutation({
			query: (payload) => ({
				url: "login",
				method: "POST",
				body: payload
			})
		}),
	})

});

export const {
	getAuth,
} = api.endpoints;

export const { 
	useGetAuthMutation,
} = api;