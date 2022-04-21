import React from "react";
import Media from "../../../Media/Media";
import useLayout from "../helpers/hooks/useLayout";
import useMedia from "../helpers/hooks/useMedia";

function FullBleedMediaBlock({ data }) {
	const media = useMedia(data.data.media);
	const layout = useLayout(data.data.layout);

	return (
		<Media
			variant={media && media.type}
			width='100vw'
			aspectRatio={"0.5625"}
			src={media && media.data.url}
			alt={media && media.data.alt}
		/>
	);
}

export default FullBleedMediaBlock;
