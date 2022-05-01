import checkIfObject from "./checkIfObject";

const removeDeadKeys = object => {
	for (let key in object) {
		if (key.startsWith("__")) {
			delete object[key];
		}

		if (checkIfObject(object[key])) {
			removeDeadKeys(object[key]);
		}
	}

	return object;
};

export default removeDeadKeys;
