import actions from "./actions";

const sendLogin = (username, password) => {
	return {
		type: actions.LOGIN,
		payload: {
			username,
			password
		}
	};
};


export { sendLogin };