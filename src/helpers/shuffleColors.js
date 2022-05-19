export const shuffleColors = object => {
	const getKeyByValue = (object, value) => {
		return Object.keys(object).find(key => object[key] === value);
	};

	const colors = [];

	for (const color in object) {
		colors.push(object[color]);
	}

	const randomIndex = Math.ceil(Math.random() * colors.length - 1);
	const randomColorHex = colors[randomIndex];
	const randomColorName = getKeyByValue(object, randomColorHex);

	return [randomColorHex, randomColorName];
};
