import { normalize } from "gsap";
import getBlockName from "./getBlockName";
import normalizeData from "./normalizeData";

const formatBlockData = array => {
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

	return blocks;
};

export default formatBlockData;
