import { configureStore } from "@reduxjs/toolkit";

import { api } from "../services/userApi";

import rootReducer from "../reducers/rootReducer";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(api.middleware),
});

export default store;