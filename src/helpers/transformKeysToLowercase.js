const transformKeysToLowerCase = object => {

	console.log('hellooo', object)

	let key,
		keys = Object.keys(object);
	let n = keys.length;
	let newObj = {};
	while (n--) {
		key = keys[n];
		newObj[key.toLowerCase()] = object[key];
	}
	return newObj;
};

export default transformKeysToLowerCase;
