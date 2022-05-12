import React from "react";
import { useState } from "react";


const Login = () => {

	const [token, setToken] = useState("");
	setToken ? true : false;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(token, username, password);
	};

	return (
		<>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form>
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
						<button className="sign-in-button" type="submit" onSubmit={handleSubmit}>Sign In</button>
					</form>
				</section>
			</main>
		</>
	);
};

export default Login;