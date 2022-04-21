import React from "react";
import { Box, Typography } from "@mui/material";
import Media from "../../../Media/Media";

function HeroBlock({ data }) {
	const splitLayout = theme => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "flex-start",
		},
	});

	console.log(data);

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
					items={{
						type: "image",
						data: {
							...data.image,
						},
					}}
					aspectRatio={"1.25"}
					accent
				/>
			</Box>
		</Box>
	);
}

export default HeroBlock;
