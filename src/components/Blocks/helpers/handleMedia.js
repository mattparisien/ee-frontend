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

		if (!instagramData) {
			return null;
		}

		instagramData &&
			instagramData.items &&
			newObj.media.push(...instagramData.items);
	}

	if (object.upload.data) {
		console.log(object);
		const uploads = object.upload.data.map(upload => ({
			url: upload.attributes.url,
			alt: upload.attributes.alternativeText,
			caption: upload.attributes.caption,
			media_type: upload.attributes.providerMetadata.resourceType,
		}));

		newObj.media.push(...uploads);
	}

	return newObj;
};

export default handleMedia;
