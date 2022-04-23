const findKey = (object, string) => {
	for (let key in object) {
		if (key.includes(string)) {
			return key;
		}
	}
	return null;
};

export default findKey;