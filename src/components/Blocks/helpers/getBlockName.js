const getBlockName = string => {
	console.log("the string", string);
	const stringToRemove = "ComponentBlocks";
	const blockName = string.slice(
		string.indexOf(stringToRemove) + stringToRemove.length,
		string.length
	);



	return blockName;
};

export default getBlockName;
