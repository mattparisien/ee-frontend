const toggleDropdown = setState => {
	return setState(prevState => {
		return {
			dropdownActive: !prevState.dropdownActive,
			...prevState,
		};
	});
};

const toggleModal = setState => {
	return setState(prevState => {
		return {
			...prevState,
			modalActive: !prevState.modalActive,
		};
	});
};

export const ACTIONS = {
	toggleDropdown,
	toggleModal,
};
