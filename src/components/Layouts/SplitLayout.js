import React from "react";
import Grid from "@mui/material";

function SplitLayout({ leftComponent, rightComponent }) {
	return (
		<Grid container>
			<Grid item xs={12} md={6} lg={6}>
				{leftComponent}
			</Grid>
			<Grid xs={12} md={6} lg={6}>
				{rightComponent}
			</Grid>
		</Grid>
	);
}

export default SplitLayout;
