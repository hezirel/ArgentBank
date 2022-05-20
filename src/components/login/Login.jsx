import React from "react";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import { 
	useSelector,
} from "react-redux";

import {
	useGetAuthQuery,
} from "../../redux/services/userApi";

const Login = () => {

	const auth = useSelector(state => state.auth);
	const [tryAuth, result] = useGetAuthQuery();

	const handleSubmit = async (e) => {
		//#:Refactor simpler form data translation
		e.preventDefault();
		const payload = e.target.elements;
		await useGetAuthQuery({
			email: payload.email.value,
			password: payload.password.value
		});
	};

	return (auth && <Navigate replace to="/profile" />) || (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label>
						<input name="email" type="text" id="email" defaultValue="tony@stark.com" required/>
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