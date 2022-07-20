import axios from "axios";

const getTaggedPostList = async next => {
	const base = `${process.env.NEXT_PUBLIC_INSTA_GRAPH_ROOT}/${process.env.NEXT_PUBLIC_INSTA_USERID}/tags`;
	const requestConfig = {
		params: {
			access_token: process.env.NEXT_PUBLIC_INSTA_APPTOKEN,
			fields:
				"id,media_type,media_product_type,video_title,media_url,permalink,username",
			limit: 100,
		},
	};

	try {
		const resp = await axios.get(base, requestConfig);

		return {
			data: resp.data.data,
			next: resp.data.paging.next,
		};
	} catch (err) {
		console.log(err);
	}
};

getTaggedPostList();

export default getTaggedPostList;
