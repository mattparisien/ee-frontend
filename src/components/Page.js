import React from "react";
import { Box } from "@mui/material";

function Page({ pageName, children }) {
	return (
		<Box
			sx={{ width: "100%", height: "100%" }}
			className={`Page Page__${pageName}`}
		>
			{children}
		</Box>
	);
}

export default Page;
