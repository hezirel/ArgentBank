import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/common/Home";


const App = () => {

	const token = useSelector(state => state.token);

	return (
		<>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={
						token ? <Navigate replace to="/profile"/> : <Login />
					} />
					<Route path="/profile" element={
						token ? <Profile /> : <Navigate replace to="/login" />
					}/>
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);
};

export default App;
