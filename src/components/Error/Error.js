import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

function Error({ statusCode, message }) {
	const wrapper = theme => ({
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.primary.colorSet.red,
		top: 0,
		left: 0,
		position: "fixed",
		zIndex: 999,
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	});



	return (
		<Box sx={wrapper} className='Error' textAlign='center'>
			<Typography variant='h4'>
				We are currently experiencing disruptions, please check back soon!
			</Typography>
		</Box>
	);
}

export default Error;
