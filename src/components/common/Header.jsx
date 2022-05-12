import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import actions from "../../app/actions";

const Header = () => {

	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch({ type: actions.LOGOUT });
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
					{auth ? (
						<NavLink className="main-nav-item" replace to = "/" onClick={handleLogout}>
							<i className="fa fa-user-circle"></i>
							Sign Out
						</NavLink>
					): ( 
						<NavLink className="main-nav-item" to="/login">
							<i className="fa fa-user-circle"></i>
							Sign In
						</NavLink> )}
				</div>
			</nav>

		</>
	);
};

export default Header;

