import React, { forwardRef, useState, useEffect, useRef } from "react";
import { StyledHeading } from "./styles";
import $ from "jquery";
import classNames from "classnames";
import { capitalize } from "lodash";
import { InView } from "react-intersection-observer";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

function Heading(props, ref) {
	const {
		small,
		medium,
		large,
		xl,
		color,
		children,
		size,
		weight,
		capitalize,
		width,
	} = props;

	const headingStyles = {
		color: color,
		weight: weight,
		capitalize: capitalize,
		width: width,
	};

	const heading = useRef(null);
	const lineAnim = useRef(gsap.timeline());
	const [intersectingTarget, setIntersectingTarget] = useState(null);

	const addToRefs = el => {
		if (el && !heading.current.includes(el)) {
			heading.current.push(el);
		}
	};

	useEffect(() => {
		if (heading.current) {
			const mySplitText = new SplitText(heading.current, {
				type: "lines",
				linesClass: "line",
			});
			$(mySplitText.lines).wrap("<div class='line-wrapper'></div>");
		}
	}, [heading]);

	useEffect(() => {
		if (intersectingTarget) {
			const lines = $(intersectingTarget).find(".line");
			lineAnim.current.to(lines, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				stagger: 0.1,
				ease: "power2.out",
			});
		}
	}, [intersectingTarget]);

	return (
		<InView
			as='div'
			onChange={(inView, entry) =>
				inView && setIntersectingTarget(entry.target)
			}
			className='heading-view-wrapper'
			threshold={1}
		>
			<StyledHeading
				className='styled-heading-wrapper'
				$headingStyles={headingStyles}
			>
				{small && <h4>{children}</h4>}
				{medium && <h3>{children}</h3>}
				{large && <h2 ref={heading}>{children}</h2>}
				{xl && <h1>{children}</h1>}
			</StyledHeading>
		</InView>
	);
}

export default forwardRef(Heading);
