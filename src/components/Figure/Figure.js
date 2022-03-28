import { maxWidth } from "@mui/system";
import React from "react";
import ImageRevealer from "../ImageRevealer/ImageRevealer";
import classNames from "classnames";
import Frame from "../Vector/Frame";
import Reveal from "react-reveal/Reveal";

function Figure({
	src,
	alt,
	width,
	height,
	maxWidth,
	maxHeight,
	classes,
	noFrame,
	noReveal,
	rotate,
	hoverEffect,
	effectDelay,
}) {
	const figureClasses = classNames("c-figure", { [classes]: classes  });

	return (
		<Reveal effect={"-figure-zoom -frame-reveal"}>
			<figure
				className={figureClasses}
				style={{
					width: width,
					height: height,
					maxWidth: maxWidth,
					maxHeight: maxHeight,
				}}
				data-rotate={rotate}
			>
				<div className='c-figure_inner -relative -stretchX -stretchY'>
					<img src={src} alt={alt}></img>

					{!noFrame && <Frame />}
					{/* <ImageRevealer /> */}
				</div>
				{!noFrame && <Frame />}
			</figure>
		</Reveal>
	);
}

export default Figure;
