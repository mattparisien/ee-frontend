import React from "react";
import Section from "../../../Containers/Section";
import Container from "../../../Containers/ContainerFluid";
import { ImageList, ImageListItem, Box } from "@mui/material";

function GalleryBlock({ data }) {
	return (
		<Section data-theme={data.backgroundColor}>
			<Container>
				<Box pt={10} pb={10}>
					<ImageList variant='masonry' cols={3} gap={8}>
						{data.data.images.map((image, i) => {
							return (
								<ImageListItem key={i}>
									<img src={image.url} alt={image.alt} />
								</ImageListItem>
							);
						})}
					</ImageList>
				</Box>
			</Container>
		</Section>
	);
}

export default GalleryBlock;
