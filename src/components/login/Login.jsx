import React from "react";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import actions from "../../app/actions";
import { useDispatch, useSelector } from "react-redux";

const tokenRequest = async ({ username, password}) => {
	const res = await fetch("http://localhost:3001/api/v1/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email: username, password }),
	});
	const data = await res.json();
	return data.body.token;
};


const Login = () => {

	const auth = useSelector(state => state.auth);
	const [username, setUsername] = useState("tony@stark.com");
	const [password, setPassword] = useState("password123");
	const dispatch = useDispatch();
	const nav = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({type: actions.LOGIN, payload: await tokenRequest({ username, password })});
		nav("/profile", { replace: true });
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
					<button className="sign-in-button" type="submit">Sign In</button>
				</form>
			</section>
		</main>
	);
};

Login.propTypes = {
	setToken: PropTypes.func
};

export default Login;