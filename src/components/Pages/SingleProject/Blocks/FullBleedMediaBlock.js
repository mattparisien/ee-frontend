import React from "react";
import Media from "../../../Media/Media";
import useLayout from "../helpers/hooks/useLayout";
import useMedia from "../helpers/hooks/useMedia";

function FullBleedMediaBlock({ data }) {
	const media = useMedia(data.data.media);
	useLayout(data.data.layout);

	return (
		<Media
			items={media}
			options={{
				format: "landscape",
			}}
			width='100vw'
		/>
	);
}

export default FullBleedMediaBlock;
