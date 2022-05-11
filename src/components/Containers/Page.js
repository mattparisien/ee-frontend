import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import useResize from "../../helpers/hooks/useResize";
import { useLocation } from "react-router";
import Section from "./Section";
import Container from "./ContainerFluid";

function Page(props) {
	const classes = classNames("Page", { [`Page-${props.name}`]: props.name });

	const [headerHeight, setHeaderHeight] = useState(null);
	const [windowWidth] = useResize();

	useEffect(() => {
		const header = document.querySelector("header");
		const height = header.offsetHeight;
		setHeaderHeight(height);
	}, [windowWidth]);

	const styles = {
		minHeight: "100vh",
		paddingTop: `${headerHeight}px`,
	};

	return (
		<Box className={classes} {...props} sx={styles}>
			{props.children}
		</Box>
	);
}

export default Page;
