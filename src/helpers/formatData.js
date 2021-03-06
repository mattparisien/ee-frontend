export const formatPosts = arr => {
	arr.sort(function (a, b) {
		return new Date(b.attributes.Date) - new Date(a.attributes.Date);
	});

	//Store in posted order
	// sortedPosts = sortedPosts.reverse();

	const formattedPosts = arr.map(post => {
		return {
			id: post.id,
			title: post.attributes.Title,
			subtitle: post.attributes.Subtitle,
			goal: post.attributes.Goal,
			about: {
				artist: post.attributes.AboutArtist,
				organization: post.attributes.AboutOrganization,
				partnership: post.attributes.AboutPartnership,
			},

			featured: post.attributes.FeaturedPost,
			metrics: post.attributes.Metrics
				? {
						reach: post.attributes.Metrics.Reach,
						impact: post.attributes.Metrics.Impact,
						funds: post.attributes.Metrics.Funds,
				  }
				: null,
			media: {
				featureImage: {
					url: post.attributes.FeatureImage.data
						? post.attributes.FeatureImage.data.attributes.url
						: null,
					altText: post.attributes.FeatureImage.data
						? post.attributes.FeatureImage.data.attributes.alternativeText
						: null,
					caption: post.attributes.FeatureImage.data
						? post.attributes.FeatureImage.data.attributes.caption
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
	arr.sort((a, b) => a.id - b.id);

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

export const formatTestimonials = array => {
	return array.map(story => {
		return {
			id: story.id,
			author: story.attributes.Author,
			quote: story.attributes.Quote,
		};
	});
};
