import actions from "./actions";

const loginAttempt = (username, password) => {
	return {
		type: actions.LOGIN,
		payload: {
			username,
			password
		}
	};
};


export { loginAttempt };