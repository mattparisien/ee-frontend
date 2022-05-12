const findKey = (object, string) => {
	for (let key in object) {
		if (key.toLowerCase().includes(string.toLowerCase())) {
			return key;
		}
	}
	return null;
};

export default findKey;
