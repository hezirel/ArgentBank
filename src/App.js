import React from "react";
import { 
	HashRouter,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

import {
	Provider,
	useSelector
} from "react-redux";
import { store } from "./redux/store/store";

import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/common/Home";


const App = () => {

	const auth = useSelector(state => state.auth);
	auth ? true:false;

	return (
		<>
			<HashRouter>
				<Provider store={store}>
					<Header />
					<Routes>
						<Route index path="/" element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="profile" element={<Profile />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</Routes>
				</Provider>
				<Footer />
			</HashRouter>
		</>
	);
};

export default App;
