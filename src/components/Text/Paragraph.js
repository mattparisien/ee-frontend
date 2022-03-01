import classNames from "classnames";
import React, { forwardRef, useRef, useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import { StyledParagraph } from "./styles";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import useResize from "../../helpers/hooks/useResize";

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
	const [windowWidth] = useResize();
	const lineAnim = useRef(gsap.timeline());
	const paragraphWrapper = useRef(null);
	const [intersectingTarget, setIntersectingTarget] = useState(null);
	const [isSplit, setIsSplit] = useState(false);
	const [splitText, setSplitText] = useState(null);

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

	useEffect(() => {
		if (paragraph.current && !isSplit) {
			const mySplitText = new SplitText(paragraph.current, {
				type: "lines, chars",
				linesClass: "line",
				charsClass: "char",
			});
			$(mySplitText.lines).wrap("<div class='line-wrapper'></div>");
			setIsSplit(true);
			setSplitText(mySplitText);
		}

		if (isSplit && splitText) {
			setSplitText(splitText.revert().split());
		}
	}, [paragraph, windowWidth]);

	useEffect(() => {
		if (intersectingTarget) {
			const lines = $(intersectingTarget).find(".line");

			lines.each((index, el) => {
				const chars = $(el).find(".char");
				let delay = 0;
				gsap.set(chars, {
					y: "100%",
					opacity: 0,
				});
				gsap.to(chars, {
					y: 0,
					opacity: 1,
					stagger: 0.02,
					duration: 2,
					ease: "expo.inOut",
					delay: delay + index / 4,
				});
			});
		}
	}, [intersectingTarget]);

	return (
		<InView
			as='div'
			onChange={(inView, entry) =>
				inView && setIntersectingTarget(entry.target)
			}
			className='paragraph-view-wrapper'
			threshold={0.5}
		>
			<StyledParagraph
				ref={paragraphWrapper}
				className={"styled-paragraph-wrapper"}
				size={size}
				margin={margin}
				padding={padding}
				offset={offset}
				indent={indent}
				indentTitle={indentTitle}
			>
				<p className={paragraphClass} ref={addToRefs}>
					{indentTitle && <div className='indent-title'>{indentTitle}</div>}
					{indent && <span className='indent-spacer'>&nbsp;</span>}
					{props.children}
				</p>
			</StyledParagraph>
		</InView>
	);
}

export default forwardRef(Paragraph);
