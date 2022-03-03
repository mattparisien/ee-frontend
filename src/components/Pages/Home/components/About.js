import React, { useContext, useRef } from "react";
import { DataContext } from "../../../Containers/Temp/Authenticated";

import { StyledAbout } from "./styles";
import { Typography } from "@mui/material";

function About(props) {
	const data = useContext(DataContext);
	const paragraphRefs = useRef([]);

	return (
		<StyledAbout>
			{data.about && (
				<>
					<Typography variant="body1">{data.about && data.about.body1}</Typography>
				</>
			)}
			{/* <Megaphone /> */}
		</StyledAbout>
	);
}

export default About;
