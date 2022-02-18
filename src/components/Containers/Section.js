import { useRef, useState, useEffect } from "react";
import { StyledSection } from "./StyledSection";
import classNames from "classnames";
import { InView } from "react-intersection-observer";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Section(props) {
	const { bg, addToRefs, isRelative } = props;
	const sectionClass = classNames("c-section", props.classes);

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
		>
			{props.children}
		</StyledSection>
	);
}
