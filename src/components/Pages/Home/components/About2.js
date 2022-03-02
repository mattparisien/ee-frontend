import React, { useContext, useEffect } from "react";
import SplitLayout from "../../../Containers/SplitLayout";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import { InstrumentPlayer } from "../../../Vector/Svg";
import { Box } from "@mui/material";

function About2() {
	const data = useContext(DataContext);

	return data.about ? (
		<>
			<SplitLayout
				textLocation={"left"}
				paragraphText={data.about.body2}
				graphic={<InstrumentPlayer />}
			/>
		</>
	) : (
		""
	);
}

export default About2;
