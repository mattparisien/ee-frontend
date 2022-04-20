import React from "react";
import { Box, Typography } from "@mui/material";
import Media from "../../../Media/Media";

function HeroBlock({ data }) {
	const splitLayout = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<Box sx={splitLayout}>
			<Box sx={{ flex: 1 }}>
				<Typography variant='h1' component='h1'>
					{data.title}
				</Typography>
				<Typography variant='h3'>{data.subtitle}</Typography>
			</Box>
			<Box sx={{ flex: 0.5 }}>
				<Media
					variant='image'
					src={data.image.url}
					alt={data.image.alt}
					aspectRatio={"1.25"}
					accent
				/>
			</Box>
		</Box>
	);
}

export default HeroBlock;
