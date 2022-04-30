const getInstaPost = async (url, array) => {
	const post = array.filter(post => post.permalink === url)[0];

	console.log(url, array);

	if (!post) {
		return null;
	}

	if (post["media_type"] === "CAROUSEL_ALBUM") {
		const carouselItems = await getInstaCarousel(post.id);
		post["items"] = carouselItems;
		delete post["media_url"];
		return post;
	}

	console.log(post, "the post");
	post["items"] = [
		{
			url: post.media_url,
			type: post.media_type.toLowerCase(),
		},
	];

	console.log(post)
	delete post.media_url;
	return post;
};

export default getInstaPost;
