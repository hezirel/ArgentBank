import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: (state = {}, action) => action ? state : state
});
