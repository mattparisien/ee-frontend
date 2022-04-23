import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

function GalleryBlock({ data }) {
	return (
		<ImageList variant='masonry' cols={3} gap={8}>
			{data.images.map((image, i) => {
				return (
					<ImageListItem key={i}>
						<img src={image.url} alt={image.alt} />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}

export default GalleryBlock;
