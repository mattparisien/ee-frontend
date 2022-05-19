const toggleDropdown = (setState) => {
	setState(prevState => ({
		dropdownActive: !prevState.dropdownActive,
		...prevState,
	}));
};

export const ACTIONS = {
	toggleDropdown,
};
