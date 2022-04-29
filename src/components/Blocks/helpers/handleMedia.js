import getInstaData from "./getInstaData";

const handleMedia = async object => {
	const getMediaType = object => {
		if (!object["instaUrl"] && (!object["upload"] || !object["upload"].data)) {
			return null;
		}

		if (object["instaUrl"]) {
			return "instaPost";
		}

		return "upload";
	};

	for (let key in object) {
		if (key === "mediaItem") {
			const type = getMediaType(object[key]);

			if (!type) {
				//If there's no type, there's no media
				object[key] = null;
			} else if (type === "instaPost") {
				object[key]["type"] = type;
				object[key]["data"] = {
					url: object[key]["instaUrl"],
				};
				delete object[key].instaUrl;
				delete object[key].upload;
			} else if (type === "upload") {
				object[key]["type"] = type;
				object[key]["data"] = {
					url: object[key].upload.data.attributes.url,
					alt: object[key].upload.data.attributes.url,
					caption: object[key].upload.data.attributes.caption,
				};
				delete object[key].instaUrl;
				delete object[key].upload;
			}
		}
	}

	//Handle fetching instagram post data
	if (object.mediaItem) {
		const instagramData = await getInstaData(object.mediaItem.data.url);
		object.mediaItem.data = instagramData;
	}

	return object;
};

export default handleMedia;
