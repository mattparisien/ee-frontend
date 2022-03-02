import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

function SectionWrapper({ children, height }) {
	return (
		<Box className='SectionWrapper' sx={{height: height}}>
			<Container maxwidth='xl'>{children}</Container>
		</Box>
	);
}

export default SectionWrapper;
