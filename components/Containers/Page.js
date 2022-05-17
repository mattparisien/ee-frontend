import classNames from "classnames";
import React, { useEffect, useState } from "react";
import useResize from "../../helpers/hooks/useResize";

function Page(props) {
	const classes = classNames("Page", { [`Page_${props.name}`]: props.name });

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
		<div className={classes} style={styles}>
			{props.children}
		</div>
	);
}

export default Page;
