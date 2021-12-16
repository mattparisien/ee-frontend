import React from "react";
import { useTheme } from "styled-components";

function Line(props) {

	const theme = useTheme();

	const lineStyle = {
		width: props.width ? props.width : "100%",
		height: props.height ? props.height : "1px",
		backgroundColor: props.color ? theme.colors[props.color] : '',
		marginTop: props.marginTop && "4vw",
		marginBottom: props.marginBottom && "4vw",
	};

	return <div style={lineStyle} className="line"></div>;
}

export default Line;
