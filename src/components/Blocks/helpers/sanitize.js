import camelcaseKeys from "camelcase-keys";

const sanitize = object => {
	const options = { deep: true };
	let newObj = camelcaseKeys(object, options);

	return newObj;
};

export default sanitize;
