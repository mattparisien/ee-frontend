import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";

function ScrollDownCta() {
	return (
		<div className="ScrollDownCta absolute left-1/2 -translate-y-1/2 -bottom-[80%] animate-bounce">
			<ArrowBackIosIcon sx={{ transform: "rotate(-90deg)" }} />
		</div>
	);
}

export default ScrollDownCta;
