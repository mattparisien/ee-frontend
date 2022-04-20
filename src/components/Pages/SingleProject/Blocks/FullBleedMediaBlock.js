import { Block } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Media from "../../../Media/Media";

function FullBleedMediaBlock({ data }) {
	const [media, setMedia] = useState(null);

	useEffect(() => {
		if (data.data.media) {
			data.data.media.then(info => {
				return setMedia({
					type: info.type,
					data: {
						url: info.data.url,
						alt: info.data.alt,
					},
				});
			});
		}
	}, [data]);

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
