import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getData = async function () {
		const content = await axios
			.get(url)
			.then(res => setData(res.data))
			.catch(err => setError(err))
			.finally(setLoading(false));
	};

	useEffect(() => {
		getData();
	});

	return { data, error, loading };
}
