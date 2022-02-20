import classNames from "classnames";
import React, { forwardRef, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { StyledParagraph } from "./styles";

function Paragraph(props, ref) {
	const {
		indent,
		indentTitle,
		size,
		margin,
		fadeUp,
		padding,
		offset,
		className,
	} = props;
	const paragraph = useRef([]);
	const paragraphWrapper = useRef(null);
	const [intersectingTarget, setIntersectingTarget] = useState(null);

	const paragraphClass = classNames("paragraph", {
		"fade-up-lines": fadeUp && fadeUp === "lines",
		"fade-up-blcok": fadeUp && fadeUp === "block",
		[className]: className,
	});

	const addToRefs = el => {
		if (el && !paragraph.current.includes(el)) {
			paragraph.current.push(el);
		}
	};

	// useEffect(() => {
	// 	if (paragraph.current) {
	// 		const mySplitText = new SplitText(paragraph.current, {
	// 			type: "lines",
	// 			linesClass: "line",
	// 		});
	// 		$(mySplitText.lines).wrap("<div class='line-wrapper'></div>");
	// 	}
	// }, [paragraph]);

	// useEffect(() => {
	// 	if (intersectingTarget) {
	// 		console.log("should not be her!");
	// 		const lines = $(intersectingTarget).find(".line");
	// 		lineAnim.current.to(lines, {
	// 			opacity: 1,
	// 			y: 0,
	// 			duration: 0.8,
	// 			stagger: 0.1,
	// 			ease: "power2.out",
	// 		});
	// 	}
	// }, [intersectingTarget]);

	return (
		<InView
			as='div'
			onChange={(inView, entry) =>
				inView && setIntersectingTarget(entry.target)
			}
			className='paragraph-view-wrapper'
			threshold={1}
		>
			<StyledParagraph
				ref={paragraphWrapper}
				className={"styled-paragraph-wrapper"}
				size={size}
				margin={margin}
				padding={padding}
				offset={offset}
				indent={indent}
			>
				{indentTitle && <div className='indent-title'>{indentTitle}</div>}
				<p className={paragraphClass} ref={addToRefs}>
					{props.children}
				</p>
			</StyledParagraph>
		</InView>
	);
}

export default forwardRef(Paragraph);
