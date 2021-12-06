import React from "react";

function Image(props) {
	const imageContainerStyle = {
		width: props.width ? props.width : "100%",
		height: props.height ? props.height : "300px",
		overflow: "hidden",
	};

	const imageStyle = {
		backgroundImage: `url(${
			props.url
				? props.url
				: "https://images.pexels.com/photos/9876016/pexels-photo-9876016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		})`,
		backgroundPosition: "50% 50%",
		backgroundRepeat: 'no-repeat',
		backgroundSize: '200%',

		width: "100%",
		height: "100%",
	};

	return (
		<div className={"image-wrapper"} style={imageContainerStyle}>
			<div className={"image"} style={imageStyle}></div>
		</div>
	);
}

export default Image;
