import {
	React,
	useEffect,
	useState,
} from "react";

import { PropTypes } from "prop-types";

import {
	useGetLoginMutation,
} from "../../redux/services/userApi";

const Login = () => {

	const [getAuthed, res] = useGetLoginMutation();

	const [userErr, setUserErr] = useState(false);
	const [passErr, setPassErr] = useState(false);
	const [serverErr, setServerErr] = useState(false);

	useEffect(() => {

		setPassErr(false);
		setUserErr(false);
		setServerErr(false);

		if (res.isError && res.error?.status === 400) {

			res.error?.data?.message?.includes("User") ?
				setUserErr(true) : setPassErr(true);

		} else if (res.isError && res.error.status === "FETCH_ERROR") {

			setServerErr(true);

		}
	}, [res]);

	const handleSubmit = async (e) => {
		//#:Refactor simpler form data translation
		e.preventDefault();
		const payload = e.target.elements;
		await getAuthed({
			email: payload.email.value,
			password: payload.password.value
		});
	};

	return (

		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label>
						<input name="email" 
							type="email" 
							id="email" 
							defaultValue="tony@stark.com" 
							className={userErr ? "input-error" : ""}
							required/>
						{userErr && <span className="error-message">{res.error.data.message}</span>}
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input name="password" 
							type="password" 
							id="password" 
							defaultValue="password123" 
							className={passErr ? "input-error" : ""}
							required/>
						{passErr && <span className="error-message">{res.error.data.message}</span>}
					</div>
					<div className="input-remember">
						<input type="checkbox" name="cookie" id="remember-me" />
						<label htmlFor="remember-me">
									Remember me
						</label>
						{serverErr && <span className="error-message">{res.error.error}</span>}
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