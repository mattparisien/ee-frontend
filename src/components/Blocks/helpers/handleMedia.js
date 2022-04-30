import getInstaData from "./getInstaData";
import getMediaType from "./getMediaType";

const handleMedia = async object => {
	if (!object) {
		return null;
	}

	const newObj = {
		media: [],
	};

	if (object.instaUrl) {
		const instagramData = await getInstaData(object.instaUrl, null);
		instagramData &&
			instagramData.items &&
			newObj.media.push(...instagramData.items);
	}

	if (object.upload.data) {
		newObj.media.push({
			url: object.upload.data.attributes.url,
			alt: object.upload.data.attributes.alternativeText,
			caption: object.upload.data.attributes.alternativeText,
			media_type: getMediaType(object.upload.data.attributes.url),
		});
	}

	return newObj;
};

export default handleMedia;
