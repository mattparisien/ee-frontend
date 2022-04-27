import React from "react";
import Media from "../Media/Media";
import useMedia from "./helpers/hooks/useMedia";

function FullBleedMediaBlock({ data }) {
	const media = useMedia(data.media);
	// useLayout(data.data.layout);

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
			items={media}
			disableContainer
			options={{ ...(media && media.options), ...layoutOptions }}
		/>
	);
}

export default FullBleedMediaBlock;
