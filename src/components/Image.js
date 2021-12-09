import React, { useEffect, useState, forwardRef } from "react";

import ImageOverlay from "./ImageOverlay";
import useResize from "../helpers/hooks/useResize";
import StyledImage from "./styles/StyledImage";

function Image(props, ref) {
	const [isHovered, setHovered] = useState(false);
	const [windowWidth] = useResize();
	const [device, setDevice] = useState(null);

	useEffect(() => {
		if (windowWidth && windowWidth <= 1024) {
			setDevice("tablet");
		} else {
			setDevice("desktop");
		}
	}, [windowWidth]);

	return (
		<StyledImage
			$props={{ ...props, windowWidth: windowWidth, isHovered: isHovered }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className={"image"} ref={ref}></div>
			<ImageOverlay
				overlayInfo={{ title: props.title, subtitle: props.subTitle }}
			/>
		</StyledImage>
	);
}

export default forwardRef(Image);
