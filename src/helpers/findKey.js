const findKey = (object, string) => {
	for (let key in object) {
		console.log('the key', key)
		if (key.toLowerCase().includes(string.toLowerCase())) {
			return key;
		}
	}
	return null;
};

export default findKey;