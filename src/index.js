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

const token = false;
const tokenCall = async (d) => {
	if (d.token) {
		const res = await fetch("http://localhost:3001/api/v1/user/profile", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${d.token}`,
			},
		});
		const data = await res.json();
		console.log(data.body);
		const pro = await fetch("http://localhost:3001/api/v1/user/profile", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${d.token}`,
			},
			body: JSON.stringify({
				firstName: "Tony",
				lastName: "Stark"
			})
		});
		console.log(await pro.json());
	}
};

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/login" element={<Login setToken={tokenCall}/>}/>
					<Route path="/profile" element={
						token ? <Profile /> : <Login />
					}/>
				</Routes>
				<Footer />
			</HashRouter>
		</Provider>
	</React.StrictMode>
);