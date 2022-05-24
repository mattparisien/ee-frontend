const convertToSlug = string => {
	return string
		.split(" ")
		.map(x => x.toLowerCase())
		.join("-");
};

export default convertToSlug;
