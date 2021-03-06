import getInstaPost from "./getInstaPost";
import getInstaPostList from "./getInstaPostList";
import getTaggedPostList from "./getTaggedPostList";

const getInstaData = async (url, nextUrl) => {
	const data = await getInstaPostList(nextUrl);

	const tagged = getTaggedPostList();

	if (data) {
		let post = await getInstaPost(url, data.data);

		return post;
	}

	return null;
};

export default getInstaData;
