import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

function TransitionMask(props) {
	const { themes } = props;

	const transitionStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		zIndex: 9999,
		display: "none",
	};

	const svgStyle = {
		display: "flex",
		alignItems: "center",
		justifyContnt: "center",
		fill: themes.colors.yellow,
	};

	return (
		<div
			className='site-transition'
			style={transitionStyle}
			ref={props.addToRefs}
		>
		
			<svg
				id='transition-morph__enter'
				height='100%'
				width='100%'
				viewbox='0 0 1920 1080'
				preserveAspectRatio='none'
				style={svgStyle}
			>
				<path
					ref={props.addToRefs}
					className='transition-morph-enter'
					d='M-3.1,1073.81h1920c-723.06,8.48-1221.05,8-1920,0Z'
				></path>
			</svg>
		</div>
	);
}

export default TransitionMask;
