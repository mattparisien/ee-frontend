import classNames from "classnames";
import React, { createContext, useRef } from "react";

export const ThemeContext = createContext();

function Section(props) {
	const { sectionTheme } = props;

	const ref = useRef(null);

	const classes = classNames("Section", {
		[props.blockName]: props.blockName,
		"mb-10": !props.disableMarginBottom,
		"mt-10": !props.disableMarginTop,
		"bg-dark text-light": sectionTheme && sectionTheme === "dark",
		"bg-light text-dark": sectionTheme && sectionTheme === "light",
		[`bg-${sectionTheme}-custom`]:
			sectionTheme && (sectionTheme !== "light " || sectionTheme !== "dark"),
	});

	return (
		<ThemeContext.Provider
			value={{ theme: sectionTheme ? "light" : sectionTheme }}
		>
			<section ref={ref} className={classes} data-theme={sectionTheme}>
				{props.children}
			</section>
		</ThemeContext.Provider>
	);
}

export default Section;
