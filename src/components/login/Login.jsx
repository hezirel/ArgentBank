import React from "react";

import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

import {
	useGetAuthMutation,
} from "../../redux/services/userApi";

const Login = () => {

	const [getAuthed, res] = useGetAuthMutation();
	const auth = useSelector((state) => state.login.auth);

	const handleSubmit = async (e) => {
		//#:Refactor simpler form data translation
		e.preventDefault();
		const payload = e.target.elements;
		await getAuthed({
			email: payload.email.value,
			password: payload.password.value
		});
	};

	if (auth) {
		console.log("Logged In MOTHERFUCKER");
	}
	if (res.error) {
		console.log(res.error);
	}

	return (false && <Navigate replace to="/profile" />) || (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label>
						<input name="email" type="email" id="email" defaultValue="tony@stark.com" required/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input name="password" type="password" id="password" defaultValue="password123" required/>
					</div>
					<div className="input-remember">
						<input type="checkbox" name="cookie" id="remember-me" />
						<label htmlFor="remember-me">
									Remember me
						</label>
					</div>
					<button className="sign-in-button" type="submit" >Sign In{auth && "loggedin"}</button>
				</form>
			</section>
		</main>
	);
};

Login.propTypes = {
	setToken: PropTypes.func
};

export default Login;