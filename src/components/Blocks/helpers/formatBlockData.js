import { findKey } from "lodash";
import keysToCamelCase from "../../../helpers/keysToCamelCase";
import getInstaMedia from "../../InstaPost/helpers/getInstaMedia";
import getBlockName from "./getBlockName";

const blockNames = [];

const formatBlockData = array => {
	console.log(array, "array");

	const blocks = array.map(block => {
		const blockName = getBlockName(block.__typename);

		const obj = {
			name: blockName,
			theme: getTheme(block, blockName),
			data:
				(blockName === "GalleryBlock" && formatGalleryBlockData(block)) ||
				(blockName === "QuoteBlock" && formatQuoteBlockData(block)) ||
				(blockName === "FullBleedMediaBlock" &&
					formatFullBleedMediaBlockData(block)) ||
				(blockName === "TextBlock" && formatTextBlockData(block)) ||
				(blockName.startsWith("Split") && formatSplitBlock(block)),
		};

		return obj;
	});

	return blocks;
};

const getTheme = (block, blockName) => {
	if (block[`${blockName}Theme`]) {
		return block[`${blockName}Theme`];
	}

	if (block[`${blockName}Options`]) {
		const theme = block[`${blockName}Options`][`${blockName}Theme`];
		return theme;
	}

	return null;
};

const formatSplitBlock = block => {
	return {
		options: { ...block[findKey(block, "Options")] },
		left: {
			text: block.TextLeft || null,
			media: null,
			cta: block[findKey(block, "Cta")] ? block[findKey(block, "Cta")] : null,
		},
		right: {
			text: block.TextRight || null,
			media: block.MediaItem
				? formatMedia(block.MediaItem).then(media => media)
				: null,
		},
	};
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
		options: block.QuoteBlockOptions
			? {
					...keysToCamelCase(block.QuoteBlockOptions),
			  }
			: null,
	};
};

const formatFullBleedMediaBlockData = block => {
	return {
		id: block.id,

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
				options: keysToCamelCase(postOptions),
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
			options: keysToCamelCase(postOptions),
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
		//Is an upload

		const obj = Object.create(templateObj, {
			data: {
				value: {
					options: keysToCamelCase(block.Options),
					permalink: block.Permalink,
					type: block.Upload.data.attributes.provider_metadata.resource_type,
					url: block.Upload.data.attributes.url,
					alt: block.Upload.data.attributes.alternativeText,
					caption: block.Upload.data.attributes.caption,
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
		options: { ...block.TextBlockOptions },
		text: block.Text,
	};
};

export default formatBlockData;
