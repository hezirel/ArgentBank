import {
	React,
} from "react";

import PropTypes from "prop-types";

import { useGetProfileQuery } from "../../redux/services/userApi";

const Profile = () => {

	const {data, isError} = useGetProfileQuery();

	if (isError) {
		console.error(isError);
	}

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>Welcome back<br />{
					data && `${data.body.firstName} ${data.body.lastName}`
				}!</h1>
				<button className="edit-button">Edit Name</button>
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