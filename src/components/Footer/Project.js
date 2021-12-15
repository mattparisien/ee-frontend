import React, { useRef, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Line from "../Line";
import { Arrow } from "../Svg";
import SlidingText from "../Marquee";

function Project(props) {

	const { footerRef } = props;

	return (
		<>
			
			<Link to='/' className={"footer-next-project-clickable"}>
				<Line color={"light"}/>
				<div className='footer-next-btn-wrapper footer-horiz-band'>
					<h2>Next</h2>
					{/* <Arrow color={"light"} /> */}
				</div>
				<Line color={"light"} />
				<div className='footer-next-title-wrapper footer-horiz-band'>
					<SlidingText text={"Some cool scrolling text"} triggerRef={footerRef}/>
				</div>

				<Line color={"light"} />
			</Link>
		</>
	);
}

export default Project;
