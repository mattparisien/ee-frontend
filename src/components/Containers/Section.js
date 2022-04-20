import { Box, useMediaQuery } from "@mui/material";
import classNames from "classnames";
import React, { useEffect, useRef, useState, useContext } from "react";
import { SiteWideControls } from "../../context/Context";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Section(props) {
	const { noGutter, sectionTheme } = props;

	const scroll = useLocomotiveScroll();

	const { setHeaderColor } = useContext(SiteWideControls);

	const mobile = useMediaQuery("(max-width: 600px)");

	const gutter = mobile ? 8 : 10;

	const [threshold, setThreshold] = useState(null);

	const ref = useRef(null);

	const section = theme => ({
		backgroundColor:
			theme.palette.primary[sectionTheme ? sectionTheme : "light"],
		color:
			theme.palette.primary[
				sectionTheme ? (sectionTheme === "dark" ? "light" : "dark") : "dark"
			],
	});

	return (
		<>
			<Box
				component='section'
				ref={ref}
				sx={section}
				mb={props.noGutter ? 0 : gutter}
				mt={props.noGutter || props.noGutterTop ? 0 : gutter}
			>
				{props.children}
			</Box>
		</>
	);
}

export default Section;
