import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "../Link/Link";
import SplitText from "../HOC/SplitText";

function NotFoundTemplate() {
	const wrap = theme => ({
		height: "80vh",
	});

	return (
		<Box display='flex' flexDirection="column" alignItems='center' justifyContent='center' sx={wrap}>
			<Typography variant='h1' component='h1'>
				<SplitText>404 Not Found</SplitText>
			</Typography>
			<Link href="/" isRouterLink accent>Back to home</Link>
		</Box>
	);
}

export default NotFoundTemplate;
