import getBlockName from "./getBlockName";

const formatBlockData = array => {
	const blocks = array.map(block => {
		const blockName = getBlockName(block.__typename);

		return {
			id: block.id,
			name: blockName,
			backgroundColor: block.BackgroundColor,
			data:
				(blockName === "GalleryBlock" && formatGalleryBlockData(block)) ||
				(blockName === "QuoteBlock" && formatQuoteBlockData(block)),
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

export default formatBlockData;
