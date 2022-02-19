export const formatPosts = arr => {
	const formattedPosts = arr.map(post => {
		return {
			id: post.id,
			title: post.attributes.Title,
			subtitle: post.attributes.Subtitle,
			about1: post.attributes.About1,
			about2: post.attributes.About2,
			media: {
				featureImage: {
					url: post.attributes.FeatureImage.data
						? post.attributes.FeatureImage.data.attributes.url
						: null,
					altText: post.attributes.FeatureImage.data
						? post.attributes.FeatureImage.data.attributes.alternativeText
						: null,
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
