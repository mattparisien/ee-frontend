import { useRef } from "react";
import { StyledSection } from "./StyledSection";
import classNames from "classnames";

export default function Section(props) {
	const { bg, addToRefs, isRelative } = props;
	const sectionClass = classNames("c-section", props.classes);

	return (
		<StyledSection className={sectionClass} $bg={bg} ref={addToRefs} isRelative={isRelative} data-scroll-section>
			{props.children}
		</StyledSection>
	);
}
