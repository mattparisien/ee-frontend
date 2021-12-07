import { post } from "jquery";
import React, { useRef, useEffect, useState } from "react";
import useHover from "../helpers/hooks/useHover";
import ImageOverlay from "./ImageOverlay";
import useResize from "../helpers/hooks/useResize";
import StyledImage from "./styles/StyledImage";

function Image(props) {
	const [isHovered, setHovered] = useState(false);
	const [windowWidth] = useResize();
	const [device, setDevice] = useState(null);

	useEffect(() => {
		if (windowWidth && windowWidth < 700) {
			setDevice("mobile");
		} else {
			setDevice("desktop");
		}
	}, [windowWidth]);

	return (
		<StyledImage
			$props={{ ...props, device: device, isHovered: isHovered }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className={"image"}></div>
			<ImageOverlay overlayInfo={{ title: props.title }} />
		</StyledImage>
	);
}

export default Image;
