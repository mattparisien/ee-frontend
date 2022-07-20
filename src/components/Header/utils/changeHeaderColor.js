const headerStyles = {
	default: "bg-light text-dark",
	transparentTextDark: "bg-transparent text-dark",
	transparentTextLight: "bg-transparent text-light",
};

const changeHeaderColor = (state, setState, pathname, dropdownActive) => {
	if (pathname === "/" && window !== "undefined") {
		if (window.scrollY <= 0) {
			setState(headerStyles.transparentTextLight);
		}

		const handleScroll = () => {
			if (
				window.scrollY > window.innerHeight &&
				state !== headerStyles.default
			) {
				setState(headerStyles.default);
			} else if (
				window.scrollY < window.innerHeight &&
				state !== headerStyles.transparentTextLight
			) {
				setState(headerStyles.transparentTextLight);
			}
		};
		window.addEventListener("scroll", handleScroll);
	}

	if (dropdownActive) {
		setState(headerStyles.transparentTextDark);
	}

	if (!dropdownActive && pathname !== "/") {
		setState(headerStyles.default);
	}
};

export default changeHeaderColor;
