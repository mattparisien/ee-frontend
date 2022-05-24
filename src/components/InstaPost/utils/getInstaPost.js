import getInstaCarousel from "./getInstaCarousel";
// import getInstaMediaType from "./getInstaMediaType";

const getInstaPost = async (url, array) => {
	// const type = getInstaMediaType(url);

	const post = array.filter(post => {
		if (post.media_type !== "VIDEO") {
			return post.permalink === url;
		}

		return (
			(url.includes("/p/") ? url.replace("/p/", "/tv/") : url) ===
				post.permalink || url === post.permalink
		);
	})[0];

	const newObj = {};

	if (!post) {
		return null;
	}

	if (post["media_type"] === "CAROUSEL_ALBUM") {
		const carouselItems = await getInstaCarousel(post.id);

		newObj["items"] = carouselItems.map(x => ({
			media_type: x.media_type.toLowerCase(),
			url: x.media_url,
			permalink: x.permalink,
			caption: x.caption,
		}));
		newObj["caption"] = post.caption;

		return newObj;
	}

	newObj["items"] = [
		{
			url: post.media_url,
			media_type: post.media_type.toLowerCase(),
			caption: post.caption,
		},
	];

	return newObj;
};

export default getInstaPost;
