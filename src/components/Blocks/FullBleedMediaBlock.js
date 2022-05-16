import React from "react";
import Media from "../Media/Media";

function FullBleedMediaBlock({ data }) {
	return (
		<Media
			useIO
			items={data && data.media && data.media.items}
			disableContainer
			aspect='landscape'
		/>
	);
}

export default FullBleedMediaBlock;
