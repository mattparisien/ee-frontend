//Disables/enables padding and max width layout depending on strapi specs

import { useEffect, useContext } from "react";
import { BlockContext } from "../../Blocks/Block";

const useLayout = layoutObject => {
	const { disablePadding, setFullBleed, setFlippedLayout } =
		useContext(BlockContext);

	useEffect(() => {
		if (layoutObject) {
			!layoutObject.inset && disablePadding();
			layoutObject.fullBleed && setFullBleed();
			layoutObject.flip && setFlippedLayout();
		}
	}, [layoutObject]);

	return null;
};

export default useLayout;
