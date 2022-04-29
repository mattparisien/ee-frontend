import { ConstructionOutlined } from "@mui/icons-material";
import getInstaData from "./getInstaData";

const handleMedia = async object => {
	const clone = Object.assign({}, object);
	console.log(clone, "clone");

	const getMediaType = object => {
		if (!object["instaUrl"] && (!object["upload"] || !object["upload"].data)) {
			return null;
		}

		if (object["instaUrl"]) {
			return "instaPost";
		}

		return "upload";
	};

	for (let key in clone) {
		if (key === "mediaItem") {
			const type = getMediaType(clone[key]);

			if (!type) {
				//If there's no type, there's no media
				clone[key] = null;
			} else if (type === "instaPost") {
				clone[key]["type"] = type;
				clone[key]["data"] = {
					url: clone[key]["instaUrl"],
				};
				delete clone[key].instaUrl;
				delete clone[key].upload;
			} else if (type === "upload") {
				clone[key]["type"] = type;

				clone[key]["data"] = {
					url: clone[key].upload.data.attributes.url,
					alt: clone[key].upload.data.attributes.url,
					caption: clone[key].upload.data.attributes.caption,
				};

				delete clone[key].instaUrl;
				delete clone[key].upload;
			}
		}
	}

	//Handle fetching instagram post data

	if (clone.mediaItem && clone.mediaItem.type === "instaPost") {
		const instagramData = await getInstaData(clone.mediaItem.data.url);
		clone.mediaItem.data = instagramData;
		return clone;
	}

	return clone;
};

export default handleMedia;
