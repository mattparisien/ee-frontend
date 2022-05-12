const getBlockName = string => {
	const stringToRemove = "blocks.";
	const blockName = string.slice(
		string.indexOf(stringToRemove) + stringToRemove.length,
		string.length
	);

	return blockName
		.split("-")
		.map(x => (x = x[0].toUpperCase() + x.substring(1)))
		.join("");
};

export default getBlockName;
