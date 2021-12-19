import React, { useRef, useEffect, useState } from "react";
import { Container, Heading } from "..";
import { StyledContactFooterInner } from "./styles";

function Contact() {
	const line = useRef(null);
	line.current = [];
	const containers = useRef(null);
	containers.current = [];
	const [coords, setCoords] = useState({
		x: 0,
		y: 0,
	});

	const addToRefs = el => {
		if (line.current && !line.current.includes(el)) {
			line.current.push(el);
		}
	};

	const addToContainerRefs = el => {
		if (containers.current && !containers.current.includes(el)) {
			containers.current.push(el);
		}
	};

	// useEffect(() => {
	// 	const lineRef = line.current;
	// 	console.log("lineref", lineRef);

	// 	document.addEventListener("mousemove", function (e) {
	// 		setCoords({
	// 			x: e.clientX / window.innerWidth,
	// 			y: e.clientY,
	// 		});
	// 	});

	// 	let width = 0;

	// 	if (coords.x && coords.y && lineRef.length > 0) {
	// 		updateCoords(coords);
	// 	}

	// 	function updateCoords(coords) {
	// 		lineRef.forEach(line => {
	// 			line &&
	// 				line.setAttribute(
	// 					"d",
	// 					`M250,0 Q${coords.x * 500},${coords.y} 250,500`
	// 				);
	// 		});
	// 	}
	// }, []);

	return (
		<StyledContactFooterInner className='contact-footer-inner'>
			<div className='bouncy-lines-container' className='-display-flex'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 500 500'
					preserveAspectRatio='xMidYMid meet'
					ref={addToContainerRefs}
				>
					<path
						id='curve-path'
						d='M250,0 Q250,250 250,500'
						strokeWidth='2px'
						stroke='white'
						ref={addToRefs}
					/>
				</svg>
				{/* <svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 500 500'
					preserveAspectRatio='xMidYMid meet'
					ref={addToContainerRefs}
				>
					<path
						id='curve-path'
						d='M250,0 Q250,250 250,500'
						strokeWidth='2px'
						stroke='white'
						ref={addToRefs}
					/>
				</svg> */}
			</div>

			<Heading small white>
				info@eyesandears.com
			</Heading>
			<span className='footer-email'>
				<a href='/' target='_blank'>
					info@eyesandears.com
				</a>
			</span>
		</StyledContactFooterInner>
	);
}

export default Contact;
