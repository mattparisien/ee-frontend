//Disables/enables padding and max width layout depending on strapi specs

import { useEffect, useContext } from "react";
import { BlockContext } from "../../Blocks/Block";

const useLayout = layoutObject => {
	// const { disableHorizontalPadding, setFullBleed, setFlippedLayout } =
	// 	useContext(BlockContext);

	useEffect(() => {
		// if (layoutObject) {
		// 	!layoutObject.inset && disableHorizontalPadding();
		// 	layoutObject.fullBleed && setFullBleed();
		// 	layoutObject.flip && setFlippedLayout();
		// 	layoutObject.inset && setInset();
		// }
	}, [layoutObject]);

	return null;
};

export default useLayout;
