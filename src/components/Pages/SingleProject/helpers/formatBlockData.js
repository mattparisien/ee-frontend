import getBlockName from "./getBlockName";
import getInstaMedia from "../../../InstaPost/helpers/getInstaMedia";
import { ConstructionOutlined } from "@mui/icons-material";

const formatBlockData = array => {
	console.log("the array", array);

	const blocks = array.map(block => {
		const blockName = getBlockName(block.__typename);

		return {
			id: block.id,
			name: blockName,
			theme: block[`${blockName}Theme`],
			data:
				(blockName === "GalleryBlock" && formatGalleryBlockData(block)) ||
				(blockName === "QuoteBlock" && formatQuoteBlockData(block)) ||
				(blockName === "FullBleedMediaBlock" &&
					formatFullBleedMediaBlockData(block)) ||
				(blockName === "TextBlock" && formatTextBlockData(block)),
		};
	});

	return blocks;
};

const formatGalleryBlockData = block => {
	return {
		images: block.Images
			? block.Images.data.map(image => ({
					url: image.attributes.url,
					alt: image.attributes.alternativeText,
			  }))
			: null,
	};
};
const formatQuoteBlockData = block => {
	return {
		id: block.id,
		quote: block.Quote,
		author: block.Author,
	};
};

const formatFullBleedMediaBlockData = block => {
	return {
		id: block.id,
		media: formatMedia(block).then(media => media),
	};
};

const formatMedia = block => {
	const templateObj = {
		type: null,
		data: {
			url: null,
			alt: null,
		},
	};

	if (block.UploadedMedia.data) {
		const obj = Object.create(templateObj, {
			type: {
				value:
					block.UploadedMedia.data.attributes.provider_metadata.resource_type,
			},
			data: {
				value: {
					url: block.UploadedMedia.data.attributes.url,
					alt: block.UploadedMedia.data.attributes.alternativeText,
				},
			},
		});

		return obj;
	}

	//Is insta post
	if (block.insta_post.data) {
		return getInstaMedia(block.insta_post.data.attributes.PostUrl, {}).then(
			postInfo => {
				const info = {
					type: {
						value: postInfo.media_type.toLowerCase(),
					},
					data: {
						value: {
							url: postInfo.media_url,
							alt: null,
						},
					},
				};

				return Object.create(templateObj, info);
			}
		);
	}
};

const formatTextBlockData = block => {
	return {
		text: block.Text,
	};
};

export default formatBlockData;
