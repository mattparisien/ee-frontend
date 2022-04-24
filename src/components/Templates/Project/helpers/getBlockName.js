const getBlockName = string => {
	const stringToRemove = "ComponentBlocks";
	const blockName = string.slice(
		string.indexOf(stringToRemove) + stringToRemove.length,
		string.length
	);

	return blockName;
};

export default getBlockName;
