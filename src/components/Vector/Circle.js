import React from "react";
import { Box } from "@mui/material";

function CircleSvg(props) {
	return (
		<Box className="circle-wrapper">
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 297.7 297.7'
				{...props}
			>
				<g
					style={{
						isolation: "isolate",
					}}
				>
					<circle cx={148.85} cy={148.85} r={148.85} />
				</g>
			</svg>
		</Box>
	);
}

export default CircleSvg;
