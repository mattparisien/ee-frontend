import { Box } from "@mui/material";
import React from "react";
import HeroMedia from "./components/HeroMedia";
import HeroTitle from "./components/HeroTitle";
import { splitLayout } from "./components/styles";

function HeroBlock({ data }) {
	return (
		<Box sx={splitLayout}>
			<HeroTitle title={data.Title} subtitle={data.Subtitle} />
			<HeroMedia image={{ ...data.FeatureImage.data }} />
		</Box>
	);
}

export default HeroBlock;
