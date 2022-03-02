//Shuffles theme colors

function shuffleColors(theme) {
	let randomColor;

	const themeObject = Object.assign({}, theme.colors);
	delete themeObject.dark;
	delete themeObject.lighterDark;

	const themeColors = Object.values(themeObject);
	console.log(themeColors);

	const randomIndex = Math.floor(Math.random() * (themeColors.length + 0) + 0);

	return themeColors[randomIndex];
}

export { shuffleColors };
