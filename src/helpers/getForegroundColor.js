const getForegroundColor = (backgroundColor) => {
	if (
		backgroundColor === "dark" ||
		backgroundColor === "blue" ||
		backgroundColor === "green" ||
		backgroundColor === "red"
	) {
		return "light";
	} else {
		return "dark";
	}
};

export default getForegroundColor;
