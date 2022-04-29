const getParam = path => {
	const substring = "projects/";
	const startIndex = path.indexOf(substring) + substring.length;

	if (path.indexOf("/", startIndex) === -1) {
		const param = path.substring(startIndex, path.length).split("-").join(" ");
		return param;
	}
};

export default getParam;
