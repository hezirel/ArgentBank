import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { sendLogin } from "../../redux/store/actionsCreator";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

	const auth = useSelector(state => state.auth);
	const [username, setUsername] = useState("tony@stark.com");
	const [password, setPassword] = useState("password123");
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(sendLogin(username, password));
	};

	return (auth && <Navigate replace to="/profile" />) || (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" defaultValue="tony@stark.com" onChange={e => setUsername(e.target.value)}/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" defaultValue="password123" onChange={e => setPassword(e.target.value)}/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">
									Remember me
						</label>
					</div>
					<button className="sign-in-button" type="submit" >Sign In</button>
				</form>
			</section>
		</main>
	);
};

Login.propTypes = {
	setToken: PropTypes.func
};

export default Login;