import {
	React,
	useState,
} from "react";

import PropTypes from "prop-types";

import { 
	useGetProfileQuery,
	useUpdateProfileMutation,
} from "../../redux/services/userApi";

const Profile = () => {

	const {data, isError, error} = useGetProfileQuery();
	const [updateProfile] = useUpdateProfileMutation();
	const [isEditing, setIsEditing] = useState(false);

	const errCheck = (errorType) => isError && error.status === errorType;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsEditing(false);
		await updateProfile({
			firstName: e.target.firstName.value,
			lastName: e.target.lastName.value,
		});
	};

	const editForm = () => {
		return (
			<div className="div-edit-form">
				<form className="edit-form" onSubmit={handleSubmit}>
					<div id="edit-form-first">
						<input name="firstName" type="text" placeholder="First Name" required/>
						<button className="edit-button" type="submit">Save</button>
					</div>
					<div id="edit-form-last">
						<input name="lastName" type="text" placeholder="Last Name" required/>
						<button className="edit-button" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
					</div>
				</form>
			</div>
		);
	};

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>Welcome back<br />{
					data && `${data.body.firstName} ${data.body.lastName}`
				}!</h1>
				{isError &&
					(errCheck(400) ?
						<div className="error-message">{error.data.message}</div> :
						<div className="error-message">{error.error}</div>
					)
				}
				{(isEditing && editForm()) || (
					<button className="edit-button" onClick={() => {
						setIsEditing(!isEditing);
					}}>Edit Name</button>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>

	);
};

Profile.propTypes = {
	data: PropTypes.any
};

export default Profile;