export const formatPosts = arr => {
	const formattedPosts = arr.map(post => {
		return {
			id: post.id,
			title: post.attributes.Title,
			subtitle: post.attributes.Subtitle,
			about: post.attributes.About,
			ourWork: post.attributes.OurWork,
			media: {
				featureImage: {
					url: post.attributes.FeatureImage.data.attributes.url,
					altText: post.attributes.FeatureImage.data.attributes.alternativeText,
				},
				additional: post.attributes.AdditionalMedia.data && [
					...post.attributes.AdditionalMedia.data,
				],
			},
		};
	});
	return formattedPosts;
};

export const formatSteps = arr => {
	const formattedSteps = arr.map(step => {
		return {
			id: step.id,
			title: step.attributes.Title,
			body: step.attributes.Body,
		};
	});
	return formattedSteps;
};

export const formatAbout = object => {
	return {
		id: object.id,
		body1: object.attributes.Body1,
		body2: object.attributes.Body2,
	};
};
