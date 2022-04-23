import React from "react";
import { Typography } from "@mui/material";

function TitleBlock({ data }) {
	return !data.Title.includes("-") ? (
		<Typography variant='h1' component='h1' textAlign='center'>
			{data.Title}
		</Typography>
	) : (
		<>
			<Typography variant='h1' component='h1' textAlign='center'>
				{data.Title.split("-")[0]}
			</Typography>
			<Typography variant='h4' component='h4' textAlign='center'>
				{data.Title.split("-")[1]}
			</Typography>
		</>
	);
}

export default TitleBlock;
