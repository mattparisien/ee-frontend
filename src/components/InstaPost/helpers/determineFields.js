const determineFields = options => {
	let baseString = "id,media_type,media_url,permalink,username";

	if (options.Caption) {
		baseString += ",caption";
	}
	return baseString;
};

export default determineFields;