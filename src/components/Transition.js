import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

function TransitionMask(props) {
	let shapes = [
		{
			d: "M1920,0V1080c-348.9,2.13-536.38,0-939.61,0H0V0Z",
		},
		{
			d: "M1920,0V313.76c-202.47,316.08-556.77,525.57-960,525.57S202.47,629.84,0,313.76V0Z",
		},
		{
			d: "M1920,0Z",
		},
	];

	return (
		<div class='transition-mask'>
			<svg
				id='transition-morph'
				height='100%'
				width='100%'
				viewbox='0 0 1920 1080'
				preserveAspectRatio='none'
				fill={"orange"}
			>
				<path
					ref={props.addToRefs}
					class='transition-morph'
					d="M1920,0V1080c-348.9,2.13-536.38,0-939.61,0H0V0Z"
				></path>
			</svg>
		</div>
	);
}


export default TransitionMask;
