import React, { useRef, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Line from "../Line";
import { Arrow } from "../Svg";
import Marquee from "../Marquee";

function Project() {
	return (
		<>
			<Line color={"light"} />
			<Link to='/' className={"footer-next-project-clickable"}>
				<div className='footer-next-btn-wrapper footer-horiz-band'>
					<h2>Next</h2>
					<Arrow color={"light"} />
				</div>
				<Line color={"light"} />
				<div className='footer-next-title-wrapper footer-horiz-band'>
					<Marquee text={"anus power!"} />
				</div>

				<Line color={"light"} />
			</Link>
		</>
	);
}

export default Project;
