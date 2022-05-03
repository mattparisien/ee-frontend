import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

function GalleryBlock({ data }) {

console.log(data)

	return (
		<ImageList variant={data.images.variant} cols={data.images.rows} gap={data.images.gap}>
			{data.images.media.data.map((image, i) => {
				return (
					<ImageListItem key={i}>
						<img src={image.attributes.formats.medium.url} alt={image.attributes.alternativeText} />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}

export default GalleryBlock;
