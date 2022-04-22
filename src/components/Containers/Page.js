import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import useResize from "../../helpers/hooks/useResize";
import { useLocation } from "react-router";
import Section from "./Section";
import Container from "./ContainerFluid";

function Page(props) {
	const classes = classNames("page", { [`page-${props.name}`]: props.name });

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
		"section:last-of-type": {
			marginBottom: 0
		}
	};

	return (
		<Box className={classes} {...props} sx={styles}>
			{props.location.pathname !== "/" &&
				props.location.pahtname !== "/projects/*" && (
					<Section>
						<Container>
							<Typography variant='h1' component='h1' textAlign='center'>
								{props.location.pathname === "/projects" && "Projects"}
								{props.location.pathname === "/about" && "Meet the Founder"}
								{props.location.pathname === "/about" && "Meet the Founder"}
							</Typography>
						</Container>
					</Section>
				)}
			{props.children}
		</Box>
	);
}

export default Page;
