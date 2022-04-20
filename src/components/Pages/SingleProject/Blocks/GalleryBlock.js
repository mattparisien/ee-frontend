import React from "react";
import Section from "../../../Containers/Section";
import Container from "../../../Containers/ContainerFluid";
import { ImageList, ImageListItem, Box } from "@mui/material";

function GalleryBlock({ data }) {
	return (
		<ImageList variant='masonry' cols={3} gap={8}>
			{data.data.images.map((image, i) => {
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
