import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

import {
	api
} from "../services/userApi";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(api.middleware),
});