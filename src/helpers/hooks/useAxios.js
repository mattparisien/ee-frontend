import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(path, callback) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { REACT_APP_BASE_URL } = process.env;

	const getData = async function () {
		if ((!path || path === "") && !callback) {
			console.error("Axios request must include a path or a callback");
			return;
		}

		if (callback) {
			const id = callback();

			const content = await axios
				.get(REACT_APP_BASE_URL + `/api/posts/${id}`)
				.then(res => setData(res.data.data))
				.catch(err => {
					if (err.response.status === 404) {
						const firstPostData = axios
							.get(REACT_APP_BASE_URL + `/api/posts/1`)
							.then(res => setData(res.data.data))
							.catch(err => setError(err))
							.finally(setLoading(false));
					}
				})
				.finally(setLoading(false));
			return;
		}

		const content = await axios
			.get(REACT_APP_BASE_URL + path)
			.then(res => setData(res.data.data))
			.catch(err => setError(err))
			.finally(setLoading(false));
	};

	useEffect(() => {
		getData();
	}, []);

	return { data, error, loading };
}
