import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/login" element={<Login />}/>
					<Route path="/profile" element={<Profile />}/>
				</Routes>
				<Footer />
			</HashRouter>
		</Provider>
	</React.StrictMode>
);