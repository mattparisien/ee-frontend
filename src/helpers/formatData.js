export const formatPosts = arr => {
	let sortedPosts = arr.sort(function (a, b) {
		if (a.id !== b.id) {
			return a.id - b.id;
		}
		if (a.name === b.name) {
			return 0;
		}
		return a.name > b.name ? 1 : -1;
	});

	//Store in posted order
	sortedPosts = sortedPosts.reverse();

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

export const formatImageList = array => {
	return array.map(post => {
		return {
			id: post.id,
			title: post.title,
			subtitle: post.subtitle,
			image: {
				src: post.media.featureImage.url,
				alt: post.media.featureImage.altText,
			},
		};
	});
};

export const formatStories = array => {
	return array.map(story => {
		return {
			id: story.id,
			heading: story.attributes.Heading,
			author: story.attributes.Author,
			quote: story.attributes.Quote,
		};
	});
};
