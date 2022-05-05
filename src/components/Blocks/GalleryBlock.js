import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import Image from "../Media/Image";

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
						<Image
							lowResSrc={image.attributes.formats.thumbnail.url}
							highResSrc={image.attributes.formats.large.url}
							alt={image.attributes.alternativeText}
							lowResClasses={"MuiImageListItem-img"}
							highResClasses={"MuiImageListItem-img"}
						/>
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}

export default GalleryBlock;
