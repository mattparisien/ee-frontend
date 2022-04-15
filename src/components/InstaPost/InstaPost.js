import React, { useEffect } from "react";
import InstagramEmbed from "react-instagram-embed";
import $ from "jquery";
import axios from "axios";

function InstaPost() {
	useEffect(() => {
		const baseURL =
			process.env.REACT_APP_INSTA_ROOT +
			`/${process.env.REACT_APP_INSTA_MEDIAID}`;
		const config = {
			params: {
				access_token: REACT_APP_INSTA_TOKEN,
				fields: "media_url,media_type",
			},
		};

		axios
			.get(baseURL, config)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}, []);

	return <div className='hi'>hi</div>;
}

export default InstaPost;
