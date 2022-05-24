import React from "react";
import { Box, Typography } from "@mui/material";

function MediaCaption({ caption }) {
	return (
		<Box className='media-caption' m={2}>
			<Typography
				variant='body3'
				fontWeight={400}
				textAlign='right'
				sx={{
					opacity: 0.6,

					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					zIndex: 999,
				}}
			>
				{caption}
			</Typography>
		</Box>
	);
}

export default MediaCaption;
