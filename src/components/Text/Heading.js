import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { StyledHeading } from "./styles";

function Heading(props, ref) {
	const {
		small,
		medium,
		large,
		xl,
		color,
		children,
		weight,
		capitalize,
		width,
		className,
		align
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

	useEffect(() => {
		if (heading.current) {
			const mySplitText = new SplitText(heading.current, {
				type: "chars, words, lines",
				charsClass: "heading-char",
				wordsClass: "word",
				linesClass: "heading-line"
			});
			$(mySplitText.lines).wrap("<div class='line-wrapper'></div>");
			$(mySplitText.lines).append("<div class='highlight-line'></div>")
		}
	}, [heading]);

	useEffect(() => {
		if (intersectingTarget) {
			const chars = $(intersectingTarget).find(".heading-char");
			const highlight = $(intersectingTarget).find(".highlight-line");
			lineAnim.current.to(chars, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				stagger: 0.05,
				ease: "power2.out",
				onComplete: () => {
					gsap.to(highlight, {
						width: "100%",
						ease: "circ.inOut",
						duration: 2
					})
				}
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
				className={`styled-heading-wrapper ${className ? className : ''}`}
				$headingStyles={headingStyles}
				align={align}
			>
				{large && <h2 ref={heading}>{children}</h2>}
				{small && <h4 ref={heading}>{children}</h4>}
			</StyledHeading>
		</InView>
	);
}

export default forwardRef(Heading);
