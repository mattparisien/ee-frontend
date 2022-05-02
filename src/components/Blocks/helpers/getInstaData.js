import getInstaPostList from "./getInstaPostList";
import getInstaPost from "./getInstaPost";

const getInstaData = async (url, nextUrl) => {
	const data = await getInstaPostList(nextUrl);

	if (data) {
		let post = await getInstaPost(url, data.data);

		if (!post) {
			console.log('no post..')
		}

		return post;
	}

	return null;
};

export default getInstaData;
