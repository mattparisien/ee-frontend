import getInstaData from "./getInstaData";

const getSrc = object => {
	console.log(object, "the obj");
	if (!object.formats) {
		return {
			lowRes: null,
			highRes: object.url,
		};
	}

	return {
		lowRes: object.formats.thumbnail.url,
		highRes: object.formats.large.url,
	};
};

const handleMedia = async object => {
	if (!object) {
		return null;
	}

	const newObj = {
		media: [],
		options: {},
	};

	if (object.instaPost) {
		const instagramData = await getInstaData(object.instaPost.url, null);

		if (!instagramData) {
			return null;
		}

		if (instagramData && instagramData.items) {
			newObj.media.push(...instagramData.items);
			for (let key in object.instaPost) {
				newObj.options[key] = object.instaPost[key];
			}
		}
	}

	if (object.mediaUpload && object.mediaUpload.media.data) {
		const uploads = object.mediaUpload.media.data.map(upload => ({
			src: getSrc(upload.attributes),
			thumbnailUrl: upload.attributes.previewUrl,
			alt: upload.attributes.alternativeText,
			caption: upload.attributes.caption,
			media_type: upload.attributes.providerMetadata.resourceType,
			width: upload.attributes.width,
			height: upload.attributes.height,
		}));

		newObj.media.push(...uploads);
	}

	return newObj;
};

export default handleMedia;
