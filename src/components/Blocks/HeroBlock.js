import React from "react";
import { Box, Typography } from "@mui/material";
import Media from "../Media/Media";
import SplitText from "../HOC/SplitText";

function HeroBlock({ data }) {


	console.log('the data..', data)

	const splitLayout = theme => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			textAlign: "center",
			"> *:nth-of-type(1)": {
				marginBottom: theme.spacing(10),
			},
		},
	});

	const mediaSize = theme => ({
		width: "50vw",
		[theme.breakpoints.up("sm")]: {
			width: "30vw",
			maxWidth: theme.spacing(80),
		},
	});

	return (
		<Box sx={splitLayout}>
			<Box sx={{ flex: 1 }}>
				<Typography variant='h1' component='h1'>
					<SplitText enterDelay={0.7}>{data.title}</SplitText>
				</Typography>
				<Typography variant='h4'>
					<SplitText enterDelay={0.8}>{data.subtitle}</SplitText>
				</Typography>
			</Box>
			<Box sx={mediaSize}>
				<Media
					zoom
					aspect='portrait'
					width='100%'
					items={[
						{
							media_type: "image",
							...data.image,
						},
					]}
					options={{
						displayCaption: true,
					}}
					accent
				/>
			</Box>
		</Box>
	);
}

export default HeroBlock;
