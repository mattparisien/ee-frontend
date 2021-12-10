import { useRef } from "react";

import classNames from "classnames";

export default function Section(props) {
	const sectionClass = classNames("c-section", props.classes);

	return (
		<section className={sectionClass} data-scroll-section ref={props.stickyRef}>
			{props.children}
		</section>
	);
}
