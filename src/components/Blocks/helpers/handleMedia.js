import getInstaData from "./getInstaData";

const getSrc = object => {
	const mediaType = object.providerMetadata.resourceType;

	if (!object.formats && mediaType !== "video") {
		return {
			lowRes: null,
			highRes: object.url,
		};
	}

	if (mediaType === "image") {
		return {
			lowRes: object.formats.thumbnail.url,
			highRes: object.formats.large ? object.formats.large.url : object.url,
		};
	}

	if (mediaType === "video") {
		return object.url;
	}
};

const handleMedia = async object => {
	console.log("object", object);

	if (!object) {
		return null;
	}

	const newObj = {
		media: [],
		options: {},
	};

	if (object.instaPost || object.myPostUrl) {
		const instagramData = await getInstaData(
			object.myPostUrl || object.instaPost.url,
			null
		);

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

	if (
		object.mediaUpload &&
		object.mediaUpload.media.data &&
		!object.myPostUrl
	) {
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
