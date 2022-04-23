import { Box, useMediaQuery } from "@mui/material";
import React, { useContext, useMemo, useRef } from "react";
import { ColorContext } from "../../context/Context";
import combineStyles from "../../helpers/combineStyles";
import getForegroundColor from "../../helpers/getForegroundColor";

function Section(props) {
	const { noGutter, sectionTheme } = props;

	
	const { currentColor } = useContext(ColorContext);

	const mobile = useMediaQuery("(max-width: 600px)");

	const gutter = mobile ? 8 : 10;

	const ref = useRef(null);

	const foregroundColor = useMemo(() => {
		return getForegroundColor(
			sectionTheme !== "currentColor" ? sectionTheme : currentColor[1]
		);
	}, [sectionTheme, currentColor]);

	const themeObject = theme => ({
		".accent::after": {
			mixBlendMode:
				sectionTheme === "light" || !sectionTheme ? "multiply" : "screen",
		},
		".foreground-el": {
			backgroundColor: theme.palette.primary[foregroundColor],
		},
		".MuiSvgIcon-root": {
			fill: theme.palette.primary[foregroundColor],
		},
		backgroundColor:
			theme.palette.primary[
				sectionTheme
					? sectionTheme === "currentColor"
						? currentColor[1]
						: sectionTheme
					: "light"
			],
		color: theme.palette.primary[foregroundColor],
	});

	const section = theme => {
		return themeObject(theme);
	};

	return (
		<>
			<Box
				component='section'
				ref={ref}
				className='section'
				sx={combineStyles(section, props.sx)}
				mb={props.noGutter ? 0 : gutter}
				mt={props.noGutter || props.noGutterTop ? 0 : gutter}
			>
				{props.children}
			</Box>
		</>
	);
}

export default Section;
