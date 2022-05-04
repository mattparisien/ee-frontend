import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";

function GalleryBlock({ data }) {
	const mobile = useMediaQuery("(max-width: 600px)");

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
							src={image.attributes.formats.medium.url}
							alt={image.attributes.alternativeText}
						/>
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}

export default GalleryBlock;
