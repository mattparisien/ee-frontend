import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";

const getInstaCarousel = async mediaId => {
	const baseURL =
		process.env.REACT_APP_INSTA_GRAPH_ROOT + "/" + mediaId + "/children";

	const requestConfig = {
		params: {
			access_token: process.env.REACT_APP_INSTA_APPTOKEN,
			fields: "id,media_type,media_url,permalink,username",
		},
	};

	try {
		const resp = await axios.get(baseURL, requestConfig);
		return resp.data.data;
	} catch (err) {
		console.log(err);
	}
};

export default getInstaCarousel;
