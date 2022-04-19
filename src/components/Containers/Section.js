import { Box, useMediaQuery } from "@mui/material";
import classNames from "classnames";
import React, { useEffect, useRef, useState, useContext } from "react";
import { SiteWideControls } from "../../context/Context";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Section(props) {
	const classes = classNames("Section c-section", {
		[props.classes]: props.classes,
	});

	const scroll = useLocomotiveScroll();

	const { setHeaderColor } = useContext(SiteWideControls);

	const mobile = useMediaQuery("(max-width: 600px)");

	const gutter = mobile ? 8 : 10;

	const [threshold, setThreshold] = useState(null);

	const ref = useRef(null);

	return (
		<>
			<Box
				component='section'
				className={classes}
				data-theme={props["data-theme"]}
				ref={ref}
				mb={props.noGutter ? 0 : gutter}
				mt={props.noGutter || props.noGutterTop ? 0 : gutter}
			>
				{props.children}
			</Box>
		</>
	);
}

export default Section;
