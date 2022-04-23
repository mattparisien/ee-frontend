const keysToCamelCase = object => {
	const newObj = {};

	const keys = Object.keys(object);

	keys.forEach(key => {
		const string = key
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			})
			.replace(/\s+/g, "");

		newObj[string] =
			object[
				Object.keys(object).find(
					key => key.toLowerCase() === string.toLowerCase()
				)
			];
	});
	return newObj;
};

export default keysToCamelCase;
