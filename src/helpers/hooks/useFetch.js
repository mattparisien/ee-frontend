import React, { useEffect, useState } from "react";

export default function useFetch(path, options) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const baseUrl = process.env.REACT_APP_BASE_URL;
	const url = baseUrl + path;

	useEffect(() => {
		if (!options) {
			console.error(
				'You must include options. Example: { requestType: "upload" }'
			);
			return;
		}

		const convertToUrlArray = posts => {
			return posts.data.map(post => ({
				id: post.id,
				featureImage: post.attributes.FeatureImage.data.attributes.url,
			}));
		};

		const replaceInvalidResponses = (validResponses, featureImagesArr) => {
			const defaultImageUrl =
				"https://images.pexels.com/photos/10438284/pexels-photo-10438284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

			console.log("valid rwsponses", validResponses);

			for (let i = 0; i < featureImagesArr.length; i++) {
				if (!validResponses.includes(featureImagesArr[i].featureImage)) {
					featureImagesArr[i].featureImage = defaultImageUrl;
				}
			}
			return featureImagesArr;
		};

		const checkIfValidUpload = featureImagesArr => {
			const validUrls = [];

			return Promise.all(
				featureImagesArr.map(image => fetch(baseUrl + image.featureImage))
			)
				.then(responses => {
					return responses
						.filter(x => x.status !== 404)
						.map(response => response.url.split(baseUrl)[1]);
				})
				.then(validResponses =>
					replaceInvalidResponses(validResponses, featureImagesArr)
				)
				.catch(err => err);
		};

		if (options.requestType && options.requestType === "upload") {
			fetch(url)
				.then(res => res.json())
				.then(info => convertToUrlArray(info))
				.then(featureImages => checkIfValidUpload(featureImages))
				.then(arrayOfValidUrls => setData(arrayOfValidUrls))
				.catch(err => setError(err))
				.finally(() => setLoading(false));
		}
	}, []);

	return [data, error, loading];
}
