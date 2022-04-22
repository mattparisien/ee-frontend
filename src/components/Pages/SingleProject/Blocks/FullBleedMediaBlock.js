import React from "react";
import Media from "../../../Media/Media";
import useLayout from "../helpers/hooks/useLayout";
import useMedia from "../helpers/hooks/useMedia";

function FullBleedMediaBlock({ data }) {
	const media = useMedia(data.data.media);
	const layout = useLayout(data.data.layout);

	console.log("media for ufll blled", media);

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
