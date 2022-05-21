import { Box } from "@mui/material";
import React from "react";
import ScrollDownCta from "./components/ScrollDownCta";
import HeroMedia from "./components/HeroMedia";
import HeroTitle from "./components/HeroTitle";
import { splitLayout } from "./components/styles";

function HeroBlock({ data }) {
	return (
		<Box sx={splitLayout}>
			<HeroTitle title={data.title} subtitle={data.subtitle} />
			<HeroMedia image={{ ...data.image }} />
			<ScrollDownCta isMobile />
		</Box>
	);
}

export default HeroBlock;
