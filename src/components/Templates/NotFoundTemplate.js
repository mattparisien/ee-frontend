import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "../Link/Link";

function NotFoundTemplate() {
	const wrap = theme => ({
		height: "80vh",
	});

	return (
		<Box display='flex' alignItems='center' justifyContent='center' sx={wrap}>
			<Typography variant='h1' component='h1'>
				404 Not Found
			</Typography>
		</Box>
	);
}

export default NotFoundTemplate;
