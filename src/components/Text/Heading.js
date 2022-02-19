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
		className
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
				type: "chars",
				charsClass: "heading-char",
			});
			$(mySplitText.lines).wrap("<div class='line-wrapper'></div>");
		}
	}, [heading]);

	useEffect(() => {
		if (intersectingTarget) {
			const chars = $(intersectingTarget).find(".heading-char");
			lineAnim.current.to(chars, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				stagger: 0.05,
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
				className={`styled-heading-wrapper ${className && className}`}
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
