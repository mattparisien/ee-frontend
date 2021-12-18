import { useRef } from "react";
import { StyledSection } from "./StyledSection";
import classNames from "classnames";

export default function Section(props) {
	const { bg, addToRefs } = props;
	const sectionClass = classNames("c-section", props.classes);

	return (
		<StyledSection className={sectionClass} $bg={bg} ref={addToRefs}>
			{props.children}
		</StyledSection>
	);
}
