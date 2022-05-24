import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
	logout,
} from "../../redux/features/login/loginSlice";

const Header = () => {

	const auth = useSelector(state => state.login.token);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<>
			<nav className="main-nav">
				<NavLink className="main-nav-logo" to="/">
					<img
						className="main-nav-logo-image"
						src="./img/argentBankLogo.png"
						alt="Argent Bank Logo"/>
					<h1 className="sr-only">Argent Bank</h1>
				</NavLink>
				<div>
					{(auth && (<NavLink className="main-nav-item" replace to="/" onClick={handleLogout}>
						<i className="fa fa-user-circle"></i>
							Sign Out
					</NavLink>) || 
							(<NavLink className="main-nav-item" to="/login">
								<i className="fa fa-user-circle"></i>
							Sign In
							</NavLink> ))}
				</div>
			</nav>

		</>
	);
};

export default Header;

