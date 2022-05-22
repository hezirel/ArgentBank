import {
	createApi,
	fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

import {
	store as RootState,
} from "../store/store";

const URL = "http://192.168.0.52:3001/api/v1/user/";

export const api = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ 
		baseUrl: URL,
		prepareHeaders: (headers) => {
			const token = RootState.getState().login?.token;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
				return headers;
			}
			return headers;
		}
	}),
	tagTypes: ["Profile"],
	endpoints: (builder) => ({
		getLogin: builder.mutation({
			query: (payload) => ({
				url: "login",
				method: "POST",
				body: payload
			})
		}),
		getProfile: builder.query({
			query: () => ({
				url: "profile",
				method: "POST"
			}),
			providesTags: ["Profile"]
		}),
		updateProfile: builder.mutation({
			query: (payload) => ({
				url: "profile",
				method: "PUT",
				body: payload
			}),
			invalidatesTags: ["Profile"],
		}),
	}),
});

export const { 
	useGetLoginMutation,
	useGetProfileQuery,
	useUpdateProfileMutation,
} = api;