import checkIfObject from "./checkIfObject";

const simplifyKeys = object => {
	for (let key in object) {
		if (
			key.toLowerCase().includes("options") ||
			key.toLowerCase().includes("theme") ||
			key.toLowerCase().includes("cta")
		) {
			const newKey = key.toLowerCase().includes("options")
				? "options"
				: key.toLowerCase().includes("theme")
				? "theme"
				: "cta";

			Object.defineProperty(
				object,
				newKey,
				Object.getOwnPropertyDescriptor(object, key)
			);
			delete object[key];

			if (checkIfObject(object[newKey])) {
				simplifyKeys(object[newKey]);
			}
		}
	}
	return object;
};

export default simplifyKeys;