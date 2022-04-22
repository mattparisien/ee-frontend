import { Box, useMediaQuery } from "@mui/material";
import React, { useContext, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { SiteWideControls } from "../../context/Context";

function Section(props) {
	const { noGutter, sectionTheme } = props;

	const scroll = useLocomotiveScroll();

	const { setHeaderColor } = useContext(SiteWideControls);

	const mobile = useMediaQuery("(max-width: 600px)");

	const gutter = mobile ? 8 : 10;

	const ref = useRef(null);

	const section = theme => ({
		".accent::after": {
			mixBlendMode: sectionTheme === "light" || !sectionTheme ? "multiply" : "screen",
		},
		".foreground-el": {
			backgroundColor:
				theme.palette.primary[sectionTheme === "dark" ? "light" : "dark"],
		},
		backgroundColor:
			theme.palette.primary[sectionTheme ? sectionTheme : "light"],
		color:
			theme.palette.primary[
				sectionTheme
					? sectionTheme === "dark" ||
					  sectionTheme === "blue" ||
					  sectionTheme === "red"
						? "light"
						: "dark"
					: "dark"
			],
	});

	return (
		<>
			<Box
				component='section'
				ref={ref}
				className='section'
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
