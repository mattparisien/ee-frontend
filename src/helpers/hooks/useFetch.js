import React, { useEffect, useState } from "react";

export default function useFetch(path, options) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const baseUrl = process.env.REACT_APP_API_URL;
	const cloudinaryBaseUrl = process.env.REACT_APP_CLOUDINARY_URL;
	const url = baseUrl + path;

	console.log('url', url)

	useEffect(() => {
		if (!options) {
			console.error(
				'You must include options. Example: { requestType: "upload" }'
			);
			return;
		}

		const convertToPostArray = posts => {
			const simplifiedPosts =  posts.data.map(post => (
				{
				id: post.id,
				featureImage: post.attributes.FeatureImage.data.attributes.url,
				title: post.attributes.Title,
				subtitle: post.attributes.Subtitle,
				body: post.attributes.Body,
			}));

			return simplifiedPosts;
		};

		const replaceInvalidResponses = (validResponses, featureImagesArr) => {
			
			const defaultImageUrl =
				"https://images.pexels.com/photos/10438284/pexels-photo-10438284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

			

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
				featureImagesArr.map(image => fetch(image.featureImage))
			)
				.then(responses => {
					return responses
						.filter(x => x.status !== 404)
						.map(response => response.url);
				})
				.then(validResponses =>
					
					replaceInvalidResponses(validResponses, featureImagesArr)
				)
				.catch(err => err);
		};

		if (options.requestType && options.requestType === "upload") {
			fetch(url)
				.then(res => res.json())
				.then(info =>  convertToPostArray(info))
				.then(featureImages => checkIfValidUpload(featureImages))
				.then(arrayOfValidUrls => setData(arrayOfValidUrls))
				.catch(err => setError(err))
				.finally(() => setLoading(false));
			return;
		}

		if (options.requestType && options.requestType === "textContent") {
			fetch(url)
				.then(res => res.json())
				.then(res => setData(res.data))
				.catch(err => setError(err))
				.finally(() => setLoading(false));
			return;
		}
	}, []);

	return [data, error, loading];
}
