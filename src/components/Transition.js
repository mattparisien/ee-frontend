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
	};

	const svgStyle = {
		display: "flex",
		alignItems: "center",
		justifyContnt: "center",
		fill: themes.colors.yellow
	};

	return (
		<div
			className='site-transition'
			style={transitionStyle}
			ref={props.addToRefs}
		>
			<svg
				id='transition-morph'
				height='100%'
				width='100%'
				viewbox='0 0 1920 1080'
				preserveAspectRatio='none'

				style={svgStyle}
			>
				<path
					ref={props.addToRefs}
					className='transition-morph'
					d='M1920,1080H0V0H1920Z'
				></path>
			</svg>
		</div>
	);
}

export default TransitionMask;
