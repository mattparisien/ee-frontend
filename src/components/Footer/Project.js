import React, { useRef, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Line from "../Line";
import SlidingText from "../Marquee";
import { StyledProjectFooterInner } from "./styles";
import useHoverEffect from "../../effects/LinkHover";

function Project(props) {
	const { footerRef, title } = props;
	const container = useRef(null);
	const hoverEffect = useHoverEffect(container.current);

	return (
		<StyledProjectFooterInner className='project-footer-inner'>
			<Link to='/' className={"footer-next-project-clickable"}>
				<Line color={"light"} />
				<div
					className='footer-next-btn-wrapper footer-horiz-band'
					ref={container}
				>
					<Link to='/' id='next-link'>
						Next
					</Link>

					{/* <Arrow color={"light"} /> */}
				</div>
				<Line color={"light"} />
				<div className='footer-next-title-wrapper footer-horiz-band'>
					<SlidingText text={title ? title : ""} triggerRef={footerRef} />
				</div>

				<Line color={"light"} />
			</Link>
		</StyledProjectFooterInner>
	);
}

export default Project;
