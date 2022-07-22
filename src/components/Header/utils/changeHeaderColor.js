const headerStyles = {
	default: "bg-light text-dark",
	transparentTextDark: "bg-transparent text-dark",
	transparentTextLight: "bg-transparent text-light",
};

const changeHeaderColor = (state, setState, pathname, dropdownActive) => {
	if (!dropdownActive) {
		setState(headerStyles.default);
	}

	if (dropdownActive ) {
		setState(headerStyles.transparentTextLight);
	}

	if (!dropdownActive && pathname !== "/") {
		setState(headerStyles.default);
	}
};

export default changeHeaderColor;
