import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";

const loginReq = async ({ username, password}) => {
	const res = await fetch("http://localhost:3001/api/v1/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email: username, password }),
	});
	const data = await res.json();
	return data.body;
};


const Login = ({ setToken }) => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setToken(await loginReq({ username, password}));
	};

	return (
		<>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
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
		</>
	);
};

Login.propTypes = {
	setToken: PropTypes.func
};

export default Login;