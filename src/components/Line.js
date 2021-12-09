import React from "react";

function Line(props) {
	const lineStyle = {
		width: props.width ? props.width : "100%",
		height: props.height ? props.height : "1px",
		backgroundColor: props.color,
		marginTop: props.marginTop && "4vw",
		marginBottom: props.marginBottom && "4vw",
	};

	return <div style={lineStyle}></div>;
}

export default Line;
