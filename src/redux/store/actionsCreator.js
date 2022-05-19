import actions from "./actions";

const sendLogin = (email, password) => {
	return {
		type: actions.LOGIN,
		payload: {
			email,
			password
		}
	};
};


export { sendLogin };