const getProjectColor = (prevColor, colors) => {
	const projectColor = getRandomArrayValue(colors);

	if (projectColor === prevColor) {
		getProjectColor(prevColor, colors);
	} else {
		return projectColor;
	}
};

const getRandomArrayValue = array => {
	return array[Math.floor(Math.random() * array.length)];
};

export default getProjectColor;
