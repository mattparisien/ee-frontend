import getBlockName from "./getBlockName";

const formatBlockData = array => {

	console.log('the array', array)

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
					formatFullBleedMediaBlockData(block)),
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
	return null;
}

export default formatBlockData;
