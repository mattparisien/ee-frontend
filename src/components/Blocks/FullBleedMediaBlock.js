import React, { useContext } from "react";
import Media from "../Media/Media";
import { BlockContext } from "./Block";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function FullBleedMediaBlock({ data }) {
	const { container } = useContext(BlockContext);
	const theme = useTheme();

	const isDesktop = useMediaQuery(
		`(min-width: ${theme.breakpoints.values.md}px)`
	);
	const isTablet = useMediaQuery(
		`(min-width: ${theme.breakpoints.values.sm}px)`
	);

	const isMobile = useMediaQuery(
		`(min-width: ${theme.breakpoints.values.xs}px)`
	);

	const width = isDesktop
		? "calc(100vw - 10rem)"
		: isTablet
		? "calc(100vw - 4rem)"
		: isMobile
		? "calc(100vw - 2rem)"
		: "";

	const maxWidth = isDesktop
		? "calc(1200px - 10rem)"
		: isTablet
		? "calc(1200px - 4rem)"
		: isMobile
		? "calc(1200px - 2rem)"
		: "";

	const layoutOptions = {
		format: "landscape",
		width: {
			desktop: !container ? "100vw" : width,
			mobile: !container ? "100vw" : width,
		},
		maxWidth: {
			desktop: maxWidth,
			mobile: maxWidth,
		},
	};

	return (
		<Media
			items={data && data.media && data.media.items}
			disableContainer
			options={{ ...layoutOptions }}
		/>
	);
}

export default FullBleedMediaBlock;
