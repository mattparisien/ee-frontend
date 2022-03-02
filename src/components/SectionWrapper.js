import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

function SectionWrapper({ children, height, bg }) {
	const theme = useTheme();

	return (
		<Box
			className='SectionWrapper'
			sx={{
				height: height,
				backgroundColor: theme.palette.primary[bg],
				color: theme.palette.primary[bg === "dark" ? "light" : "dark"],
				position: "relative",
			}}
		>
			<Container maxwidth='xl' sx={{ height: "100%" }}>
				{children}
			</Container>
		</Box>
	);
}

export default SectionWrapper;
