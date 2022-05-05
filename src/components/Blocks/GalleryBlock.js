import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";

function GalleryBlock({ data }) {
	const mobile = useMediaQuery("(max-width: 600px)");

	console.log('gallery block data...', data)

	return (
		<ImageList
			variant={data.images.variant}
			cols={mobile ? 1 : data.images.columns}
			gap={mobile ? 15 : data.images.gap}
		>
			{data.images.media.data.map((image, i) => {
				return (
					<ImageListItem key={i}>
						<img
							loading='lazy'
							src={image.attributes.url}
							alt={image.attributes.alternativeText}
						/>
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}

export default GalleryBlock;
