import { post } from "jquery";
import React, { useRef, useEffect, useState } from "react";
import useHover from "../helpers/hooks/useHover";
import ImageOverlay from "./ImageOverlay";
import useResize from "../helpers/hooks/useResize";

function Image(props) {
	const [device, setDevice] = useState(null);

	const imageContainerStyle = {
		width: props.width ? props.width : "100%",
		height: props.height ? props.height : "100%",
		overflow: "hidden",
	};

	function addToRefs(el) {
		if (el && !hoverRefs.current.includes(el)) {
			hoverRefs.current.push(el);
		}
	}

	const imageStyle = {
		backgroundImage: `url(${
			props.url
				? props.url
				: "https://images.pexels.com/photos/9876016/pexels-photo-9876016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		})`,
		backgroundPosition: "50% 50%",
		backgroundRepeat: "no-repeat",
		backgroundSize: "200%",

		width: "100%",
		height: "100%",
	};

	const [windowWidth] = useResize();
	useEffect(() => {
		console.log(device);
		if (windowWidth && windowWidth < 700) {
			setDevice("mobile");
		} else {
			setDevice("desktop");
		}
	}, [windowWidth]);

	const [hoverRefs, isHovered] = useHover();

	hoverRefs.current = [];

	return (
		<>
			<div
				className={"image-wrapper -position-relative"}
				style={imageContainerStyle}
				ref={addToRefs}
			>
				<div className={"image"} style={imageStyle}></div>
				{device === "desktop" && (
					<ImageOverlay overlayInfo={{ title: props.title }} />
				)}
				{device === "mobile" && isHovered && (
					<ImageOverlay overlayInfo={{ title: props.title }} />
				)}
			</div>
		</>
	);
}

export default Image;
