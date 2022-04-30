import getInstaPostList from "./getInstaPostList";
import getInstaPost from "./getInstaPost";

const getInstaData = async url => {
	const postList = await getInstaPostList();
	let post = await getInstaPost(url, postList);
	

	return post;
};

export default getInstaData;
