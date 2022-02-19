import { useRef, useState, useEffect } from "react";
import { StyledSection } from "./StyledSection";
import classNames from "classnames";
import { InView } from "react-intersection-observer";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Section(props) {
	const { bg, addToRefs, isRelative, noGutter } = props;
	const sectionClass = classNames("Section", props.classes);

	//Detect when section intersects with header
	const [intersectingTarget, setIntersectingTarget] = useState(null);

	return (
		<StyledSection
			isFullHeight={props.isFullHeight}
			className={sectionClass}
			$bg={bg}
			ref={addToRefs}
			isRelative={isRelative}
			data-scroll-section
			noGutter={noGutter}
			
		>
			{props.children}
		</StyledSection>
	);
}
