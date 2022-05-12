import React from "react";
import PropTypes from "prop-types";

const Profile = ({ payload = {} }) => {
	console.log(payload);
	return (
		<>
			<span>Profile</span>
		</>
	);
};

Profile.propTypes = {
	payload: PropTypes.object
};

export default Profile;