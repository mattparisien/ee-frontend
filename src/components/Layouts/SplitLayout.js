import React from "react";
import { Grid } from "@mui/material";

function SplitLayout({ leftComponent, rightComponent, gap, wrap }) {
	return (
		<Grid container gap={gap} wrap={wrap ? wrap : "wrap"}>
			<Grid item xs={12} md={6} lg={6}>
				{leftComponent}
			</Grid>
			<Grid item xs={12} md={6} lg={6}>
				{rightComponent}
			</Grid>
		</Grid>
	);
}

export default SplitLayout;