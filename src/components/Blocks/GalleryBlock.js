import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import Image from "../Media/Image";
import Gallery from "../Gallery/Gallery";

function GalleryBlock({ data }) {
	const mobile = useMediaQuery("(max-width: 600px)");

	return (
		<Gallery
			variant={data.Images.Variant}
			cols={mobile ? 1 : data.Images.Columns}
			gap={mobile ? 15 : data.Images.Gap}
			items={data.Images.Media.data}
		/>
	);
}

export default GalleryBlock;
