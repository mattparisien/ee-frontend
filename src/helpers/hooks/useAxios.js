import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(path) {
	
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { REACT_APP_BASE_URL } = process.env;

	const getData = async function () {
		
		const content = await axios
			.get(REACT_APP_BASE_URL + path)
			.then(res => setData(res.data))
			.catch(err => setError(err))
			.finally(setLoading(false));
	};

	useEffect(() => {
		getData();
	}, []);

	return { data, error, loading };
}
