import { createReducer } from "@reduxjs/toolkit";
import actions from "../store/actions";
import useFetch from "../js/useFetch";

const loginReducer = createReducer(({ auth: false }), (builder) => {
	builder
		.addCase(actions.LOGIN, (state, action) => {
			if (action.payload.username && action.payload.password) {
				try {
					const { username, password } = action.payload;
					const { data } = useFetch({ uri: "login", body: JSON.stringify({ username, password }) });
					if (data) {
						return ({
							...state,
							auth: true,
							token: data
						});
					}
				} catch (err) {
					return ({
						...state,
						error: err.message
					});
				}
			}
		});
});

export {
	loginReducer
};