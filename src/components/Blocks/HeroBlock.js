import React from "react";
import { Box, Typography } from "@mui/material";
import Media from "../Media/Media";
import SplitText from "../HOC/SplitText";

function HeroBlock({ data }) {
	const splitLayout = theme => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "flex-start",
			"> *:nth-of-type(1)": {
				marginBottom: theme.spacing(10),
			},
		},
	});

	return (
		<Box sx={splitLayout}>
			<Box sx={{ flex: 1 }}>
				<Typography variant='h1' component='h1'>
					<SplitText>{data.title}</SplitText>
				</Typography>
				<Typography variant='h3'>
					<SplitText>{data.subtitle}</SplitText>
				</Typography>
			</Box>
			<Box sx={{ flex: 0.5 }}>
				<Media
					items={{
						type: "image",

						...data.image,
					}}
					options={{
						format: "portrait",
						displayCaption: true,
					}}
					accent
				/>
			</Box>
		</Box>
	);
}

export default HeroBlock;
