import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const URL = "http://192.168.0.52:3001/api/v1/user/";

const useFetch = ({ uri, body}) => { 

	const [data, setData] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		fetch(`${URL}${uri}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${body}`
			},
		})
			.then(async res => {
				if(!res.ok) {
					setError(res.statusText);
					setLoading(false);
				} else {
					res.json().then(data => setData(data.data))
						.then(() => setLoading(false));
				}
			})
			.catch(err => {
				setError(err);
				setLoading(false);
			});

	}, []);

	return { loading, data, error};
};

useFetch.propTypes = {
	options: PropTypes.string.isRequired
};

export default useFetch;
