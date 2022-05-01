import React from "react";
import Media from "../Media/Media";

function FullBleedMediaBlock({ data }) {
	const layoutOptions = {
		format: "landscape",
		width: {
			desktop: "100vw",
			mobile: "100vw",
		},
		maxWidth: {
			desktop: "100vw",
			mobile: "100vw",
		},
	};

	return (
		<Media
			items={data && data.media && data.media.items}
			disableContainer
			options={{ ...layoutOptions }}
		/>
	);
}

export default FullBleedMediaBlock;
