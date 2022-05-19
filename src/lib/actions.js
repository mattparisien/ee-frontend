import { ConstructionOutlined } from "@mui/icons-material";

const toggleDropdown = setState => {
	return setState(prevState => {
		console.log(prevState);

		return {
			dropdownActive: !prevState.dropdownActive,
			...prevState,
		};
	});
};

export const ACTIONS = {
	toggleDropdown,
};
