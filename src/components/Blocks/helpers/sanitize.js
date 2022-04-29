import toCamel from "./toCamel";

const sanitize = object => {
	let newObj = toCamel(object);

	return newObj;
};

export default sanitize;
