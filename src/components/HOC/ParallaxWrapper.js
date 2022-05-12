import React from "react";
import { Parallax } from "react-scroll-parallax";

function ParallaxWrapper({ children, speed }) {
	return <Parallax speed={speed}>{children}</Parallax>;
}

export default ParallaxWrapper;
