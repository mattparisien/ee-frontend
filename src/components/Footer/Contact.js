import React, { useRef, useEffect, useState, useDebugValue } from "react";
import { Container, Heading } from "..";
import { DrawnLogo } from "..";

import { Section } from "..";

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
		<>
			<div className='footer-contact'>
				<div className='footer-contact__left'>
					<Heading large color='light'>
						Hear to listen
					</Heading>
					<div className='footer-email'>
						<Heading large color='light'>
							<a href='mailto:info@eyesandears.com'>sammy@eyesandearsagency.com</a>
						</Heading>
					</div>
				</div>
				<div className='footer-contact__right'>
					<DrawnLogo color="light"/>
				</div>
			</div>
		</>
	);
}

export default Contact;
