import { createReducer } from "@reduxjs/toolkit";
import actions from "../store/actions";
import useFetch from "../../js/useFetch";

const loginReducer = createReducer(({ auth: false }), (builder) => {
	builder
		.addCase(actions.LOGIN, (state, { payload: {
			username, password
		}}) => {
			if (username && password) {
					if (data) {
						state.auth = true;
						state.token = data;
					}
				}
			}
		});
});

export {
	loginReducer
};