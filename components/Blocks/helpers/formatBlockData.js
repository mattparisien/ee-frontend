import getBlockName from "./getBlockName";
import normalizeData from "./normalizeData";

const formatBlockData = async array => {
	const blocks = array.map(async block => {
		const blockName = getBlockName(block.__component);
		const normalizedData = await normalizeData(block, blockName, array);

		if (
			!normalizedData ||
			(normalizedData.media && normalizedData.media.length < 1)
		) {
			return null;
			
		}

		const blockObj = {
			name: blockName,
			data: normalizedData,
		};

		return blockObj;
	});

	return await blocks;
};

export default formatBlockData;
