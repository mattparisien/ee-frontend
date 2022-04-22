import React from "react";
import Media from "../../../Media/Media";
import useLayout from "../helpers/hooks/useLayout";
import useMedia from "../helpers/hooks/useMedia";

function FullBleedMediaBlock({ data }) {
	const media = useMedia(data.data.media);
	const layout = useLayout(data.data.layout);

	console.log('media for ufll blled', media)

	return <Media items={media} width='100vw' aspectRatio={"0.5625"} />;
}

export default FullBleedMediaBlock;
