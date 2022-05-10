import React from "react";
import { Box, Typography } from "@mui/material";
import Media from "../../Media/Media";
import SplitText from "../../HOC/SplitText";
import { splitLayout, mediaSize } from "./styles";
import ScrollDownCta from "./components/ScrollDownCta";

function HeroBlock({ data }) {
	return (
		<Box sx={splitLayout}>
			<Box sx={{ flex: 1, position: "relative" }}>
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
			<ScrollDownCta />
		</Box>
	);
}

export default HeroBlock;
