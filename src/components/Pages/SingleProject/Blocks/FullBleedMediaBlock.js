import React from "react";
import Image from "../../../Image/Image";

function FullBleedMediaBlock({ image }) {
	return (
		<Image
			width='100vw'
			aspectRatio={"0.5625"}
			src={image.url}
			alt={image.url}
		/>
	);
}

export default FullBleedMediaBlock;
