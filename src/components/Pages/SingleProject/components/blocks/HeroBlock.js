import React from "react";
import Section from "../../../../Containers/Section";
import Container from "../../../../Containers/ContainerFluid";
import { Box, Typography } from "@mui/material";
import Image from "../../../../Image/Image";

function HeroBlock({ title, subtitle, image }) {
	const splitLayout = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<Box sx={splitLayout}>
			<Box sx={{ flex: 1 }}>
				<Typography variant='h1' component='h1'>
					{title}
				</Typography>
				<Typography variant='h3'>{subtitle}</Typography>
			</Box>
			<Box sx={{ flex: 0.5 }}>
				<Image src={image.url} alt={image.alt} aspectRatio={"1.25"} accent />
			</Box>
		</Box>
	);
}

export default HeroBlock;
