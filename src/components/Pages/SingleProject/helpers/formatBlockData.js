import getInstaMedia from "../../../InstaPost/helpers/getInstaMedia";
import getBlockName from "./getBlockName";

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
				block.UploadedMedia || block.insta_post
					? formatMedia(block).then(media => media)
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

		return new Promise((resolve, reject) => resolve(obj));
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
