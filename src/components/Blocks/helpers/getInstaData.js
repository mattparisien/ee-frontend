import getInstaPostList from "./getInstaPostList";
import getInstaPost from "./getInstaPost";

const getInstaData = async (url, nextUrl) => {
	const data = await getInstaPostList(nextUrl);

	if (data) {
		let post = await getInstaPost(url, data.data);

		return post;
	}

	return null;
};

export default getInstaData;
