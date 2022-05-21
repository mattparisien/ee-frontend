
const toggleDropdown = setState => {
	return setState(prevState => {
		return {
			dropdownActive: !prevState.dropdownActive,
			...prevState,
		};
	});
};

export const ACTIONS = {
	toggleDropdown,
};
