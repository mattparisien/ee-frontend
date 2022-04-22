import { ConstructionOutlined } from "@mui/icons-material";
import getInstaMedia from "../../../InstaPost/helpers/getInstaMedia";
import getBlockName from "./getBlockName";
import transformKeysToLowerCase from "../../../../helpers/transformKeysToLowercase";

const blockNames = [];

const formatBlockData = array => {
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
				(blockName === "TextBlock" && formatTextBlockData(block)) ||
				(blockName.startsWith("Split") && formatSplitBlock(block)),
		};
	});

	return blocks;
};

const formatSplitBlock = block => {
	return {
		layout: {
			flip: block.Flip,
			inset: block.Inset,
		},

		left: {
			text: block.TextLeft || null,
			media: null,
			cta: block.CallToAction.length >= 1 ? block.CallToAction[0] : null,
		},
		right: {
			text: block.TextRight || null,
			media:
				block.MediaItem && block.MediaItem.length >= 1
					? formatMedia(block.MediaItem[0]).then(media => media)
					: null,
		},
	};
};

const formatGalleryBlockData = block => {
	return {
		// style: {
		// 	variant: block.Style,
		// 	rowHeight: block.RowHeight,
		// 	columns: block.Columns
		// },
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
		layout: {
			fullBleed: true,
		},
		media:
			block.MediaItem.length >= 1
				? formatMedia(block.MediaItem[0]).then(media => media)
				: null,
	};
};

const formatMedia = block => {
	const formatInfo = (info, postOptions, permalink) => {
		let finalObject = {
			data: {
				value: "",
			},
		};

		if (!Array.isArray(info)) {
			//Is a single media item

			

			finalObject.data.value = {
				options: transformKeysToLowerCase(postOptions),
				permalink: permalink,
				type: info.media_type.toLowerCase(),
				url: info.media_url,
				alt: null,
			};

			return finalObject;
		}

		//Is a carousel

		finalObject.data.value = {
			type: "carousel",
			permalink: permalink,
			options: transformKeysToLowerCase(postOptions),
			items: info.map(item => ({
				data: {
					type: item.media_type.toLowerCase(),
					id: item.id,
					url: item.media_url,
					alt: null,
					permalink: item.permalink,
				},
			})),
		};

		return finalObject;
	};

	const templateObj = {
		url: null,
		alt: null,
	};

	if (block.Upload.data) {
		const obj = Object.create(templateObj, {
			data: {
				value: {
					options: {
						...transformKeysToLowerCase(block.Options),
					},
					permalink: block.Permalink,
					type: block.Upload.data.attributes.provider_metadata.resource_type,
					url: block.Upload.data.attributes.url,
					alt: block.Upload.data.attributes.alternativeText,
				},
			},
		});

		return new Promise((resolve, reject) => resolve(obj));
	}

	//Is insta post
	if (block.InstaUrl) {
		return getInstaMedia(block.InstaUrl, {}).then(postInfo => {
			const info = formatInfo(postInfo, block.Options, block.Permalink);
			return Object.create(templateObj, info);
		});
	}
};

const formatTextBlockData = block => {
	return {
		text: block.Text,
	};
};

export default formatBlockData;
