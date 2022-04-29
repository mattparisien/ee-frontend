const getInstaPost = async (url, array) => {
	const post = array.filter(post => post.permalink === url)[0];

	if (!post) {
		return null;
	}

	if (post["media_type"] === "CAROUSEL_ALBUM") {
		const carouselItems = await getInstaCarousel(post.id);
		post["items"] = carouselItems;
		delete post["media_url"];
		return post;
	}

	post["items"] = [post.media_url];
	delete post.media_url;
	return post;
};

export default getInstaPost;