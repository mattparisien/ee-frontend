import React from "react";
import { Box } from "@mui/material";

function ContainerVertical(props) {
	return (
		<Box
			className='ContainerVertical'
			sx={{ padding: "5rem 0", height: "100%", position: "relative" }}
		>
			{props.children}
		</Box>
	);
}

export default ContainerVertical;
