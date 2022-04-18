import React from "react";

function CircleSvg(props) {
	return (
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
				<circle
					cx={148.85}
					cy={148.85}
					r={148.85}
					style={{
						fill: "#e5d010",
						mixBlendMode: "multiply",
					}}
				/>
			</g>
		</svg>
	);
}

export default CircleSvg;
