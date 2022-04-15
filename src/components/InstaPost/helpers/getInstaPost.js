import axios from "axios"

const getInstaPost = () => {
  const baseURL =
			process.env.REACT_APP_INSTA_ROOT +
			`/${process.env.REACT_APP_INSTA_MEDIAID}`;
		const config = {
			params: {
				access_token: process.env.REACT_APP_INSTA_APPTOKEN,
				fields: "media_url,media_type,caption,permalink",
			},
		};

		return axios
			.get(baseURL, config)
			.then(res => res)
			.catch(err => console.log(err));
}

export default getInstaPost;