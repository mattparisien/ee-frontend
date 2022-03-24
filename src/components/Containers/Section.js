import React, {forwardRef} from "react";
import classNames from "classnames";

function Section(props,ref) {
	const classes = classNames("Section c-section", {
		[props.classes]: props.classes,
	});

	return (
		<>
			<section className={classes} data-theme={props["data-theme"]} ref={ref}>
				{props.children}
			</section>
		</>
	);
}

export default forwardRef(Section);
