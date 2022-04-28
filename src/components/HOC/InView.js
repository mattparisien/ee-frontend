import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

function InView({ children }) {
	const [hasViewed, setHasViewed] = useState(false);

	const { ref, inView, entry } = useInView();

	useEffect(() => {
		if (inView && !hasViewed) {
			setHasViewed(true);
		}
	}, [inView, hasViewed]);

	return (
		<Box className='InView' ref={ref} sx={{ width: "100%", height: "100%" }}>
			{hasViewed && children}
		</Box>
	);
}

export default InView;
