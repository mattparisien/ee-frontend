import { maxWidth } from "@mui/system";
import React from "react";
import ImageRevealer from "../ImageRevealer/ImageRevealer";
import classNames from "classnames";

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
}) {
	const figureClasses = classNames("c-figure", { [classes]: classes });

	return (
		<Reveal effect={!noReveal ? "-scale-reveal" : null}>
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
				
		</figure>
		</Reveal>
	);
}

const Frame = props => {
	// gsap.registerPlugin(DrawSVGPlugin);
	// const revealer = useRef(null);

	// useEffect(() => {
	// 	if (revealer.current) {
	// 		gsap.to(revealer.current, {
	// 			drawSVG: "0%",
	// 			duration: 3,
	// 			ease: "power3.out",
	// 		});
	// 	}
	// }, []);

	return (
		<div className='c-figure_frame'>
			<svg
				id='a'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 367.15 355.58'
				{...props}
				preserveAspectRatio='none'
			>
				<path
					d='M30.38 280.12c.05-1.42.41-4.14.38-5.35-.09-3.49.07-7.53.06-11.48 0-2.72.16-3.88.27-5.86.08-1.51-.12-3.15-.12-4.65 0-3.14.21-6.33.25-9.55.34-28.53-.16-54.44-.22-80.13-.11-1.2-.44-1.73-.4-3.4.59-4.28.13-9.3.03-15.16-.17-10.43-.01-22.8-.24-32.76-.02-1.13-.23-2.25-.27-3.34-.18-4.93.08-10.04-.48-14.01.15-7.99.09-16.46-.48-23.21.48-2.27.1-4.8.06-6.88-.04-2.24.09-3.4.02-5.51-.31-10.12-.21-19.43-.61-27.87.22-1.08.33-2.73.23-4.03-.71-.89-1.39-1.91-1.32-5.19-.54-.72-.65-.87-1.05-1.39.39-2.24-.21-3.77-.86-4.07-.17 5.31-.07 11.58-1.24 15.08-.12 1.35.08 1.71.05 2.78-1.36 6.29-1.79 17.19-1.85 24.92.55 5.75.24 11.06.27 17.6.66 2.29.2 5.52.15 8.35-.04 2.21.26 5.27.28 7.94.02 3.67-.25 5.96.27 8.4-.22 1.23-.03 1.43-.2 3.13.15 1.06.25 2.23.28 3.34.23 8.61 0 18.27.55 25.54-.18.51-.17 1.92-.2 3.13.23 3.33.16 6.78.24 9.31.06 2.02-.15 3.44-.14 5.45 0 2.59.24 5.39.28 7.95.14 10.05.21 21.67.24 28.17.03 7.69.18 14.76.15 22.14-.02 6.24.2 10.78.19 16.18 0 2.85-.21 5.74-.22 8.64-.03 4.5.46 9.1 0 14.26.08 1.27.2 2.45.26 3.8-.17 14.26.3 28.13-.22 45.89-.03 1.61.42-.79.35.62.18 4.64-.16 8.45-.09 12.84.01.85.19-.15.23.56.09 1.53-.05 4.01.22 5.62.18 1.09.62.41.55 2.09-.11 1.73.15 2.32.01 4.14.69 1.31.46 3.87.55 6.69.06 1.87.38 4.2.44 6.18.11 3.18-.21 5.64.04 7.83.28.32.28-.71.61-.19.65-3.74 1.01-7.93.99-10.13-.03-2.81.56-5.78.38-9.95.04-1.27.3 1.23.26-.8.06-.87-.14-.98-.2-1.47.64.09.6-6.6.32-7.67-.03.53-.01 1.3-.16 1.31.05-1.44.07-7.05.36-9.04.16 1.65-.28 3 0 4.6.21-4.28.44-7.27.39-10.4-.39-.26-.12 3.71-.49 4.83.02-2.9.26-7.1.22-8.63.17-1.06.47 1.32.5-.7.26-5.96-.01-11.3.18-16.47Zm-.47 13.59c.04 1.99-.07-3.58 0 0Zm.23-13.7c.35.46-.14.92-.05 1.83-.29-.2 0-1.56.05-1.83Zm-.25 4.95c.02-.91.05-1.81.07-2.72.17.17.4 3.18-.07 2.72Zm-.72 32.34c.26.17 0 1.95.05 2.78-.26-.18 0-1.96-.05-2.78Z'
					style={{
						fill: "#d7202e",
						fillRule: "evenodd",
					}}
				/>
				<path
					d='M86.69 349.4c-.74-.35-2.12.09-2.07.27-1.01-.37-1.9.02-2.76-.33-3.35.2-7.24-.09-9.64 0-1.99.08-3.1.4-5.37-.05-1.19-.24-4.31-.12-3.35-.56-3.67.15-7.13-.41-9.17-.24-1.21-.37-2.44-.75-4.51-.9-1.93 0-2.52.25-4.21.29-5.15-.62-12.74-.62-18.99-.96-.27-1.16-5.07-1.19-5.91-2.21.96-.24 1.34-.03 2.67-.03-.16-.71 3.45-.67 4.53-1.14 1.65 0 3.05.08 4.33.18 1.62-.32 3.08-.16 3.61-.53 2.71.37 9.44-.41 13.88-.18 1.36-.18 1.89-.53 3.59-.65 5.21.08 10.18.21 15.54.04 4.69-.15 9.52-.58 14.29-.66 16.8-.29 36.28-.56 54.48-.58 1.04 0 2.59-.17 3.7-.17.91 0 1.77.21 2.73.2 2.16 0 4.31-.22 6.38-.2.97 0 1.81.2 2.73.2 16.22.03 33.56-.81 51.65-1.14 4.55-.08 9.22-.04 13.88-.18 8.46-.25 16.86-.59 25.03-.56 13.02.05 27.59.66 37.17.85 2.81.05 5.62.08 8.6.13 5.94.11 11.08.23 17.7.13 4.92-.07 9.37-.12 14.47.06 7.22.25 12.72-.27 15.75.88 4.94-.17 10.81.28 15.63.4 2.67.07 3.32.17 5.49.53.66 1.72-9.65 1.25-12.26 2.32-6.84.06-12.6.45-17.94 1.07-.81.07 0 .12.56.11-1.24.36-5.02.21-4.59.9-7.21.14-14.44.69-21.7 1-1.68.07-3.59-.02-5.33.07-.67.03-1.91.25-2.61.27-4.75.14-12.26-.21-15.98.33-2.78.4-17.6.2-25.08.32-6.05.09-11.83.29-17.59.34-4.48.04-9.13-.1-12.78.28-3.73-.31-12.16-.11-16.07-.04-.84.02-1.41.26-2.07.27-.64 0-2.24-.2-2.73-.2-4.67-.09-9.75.13-14.41.18-7.51.08-15.86.1-22.89.53-15.57-.19-32.25.1-48.1.38-1.97-.49-5.8-.21-9.17-.24-6.86-.07-13.94-.84-22.63-.55.37-.12.93-.19 1.54-.26Z'
					style={{
						fillRule: "evenodd",
						fill: "#3c6fb6",
					}}
				/>
				<path
					d='M357.29 284c-.35.73.09 2.09.27 2.04-.37.99.02 1.87-.33 2.72.2 3.3-.09 7.13 0 9.49.08 1.96.4 3.05-.05 5.29-.24 1.17-.12 4.24-.56 3.3.15 3.62-.41 7.02-.24 9.03-.37 1.2-.75 2.4-.9 4.44 0 1.9.25 2.48.29 4.15-.62 5.07-.62 12.55-.96 18.7-1.16.26-1.19 5-2.21 5.82-.24-.94-.03-1.32-.03-2.63-.71.16-.67-3.4-1.14-4.46 0-1.63.08-3 .18-4.27-.32-1.59-.16-3.04-.53-3.56.37-2.66-.41-9.3-.18-13.67-.18-1.34-.53-1.86-.65-3.53.08-5.13.21-10.02.04-15.3-.15-4.61-.58-9.37-.66-14.07-.29-16.55-.56-35.72-.58-53.65 0-1.03-.17-2.55-.17-3.65 0-.9.21-1.74.2-2.69 0-2.13-.22-4.25-.2-6.28 0-.95.2-1.78.2-2.69.03-15.97-.81-33.05-1.14-50.87-.08-4.48-.04-9.08-.18-13.66-.25-8.33-.59-16.6-.56-24.64.05-12.82.66-27.17.85-36.6.05-2.77.08-5.54.13-8.47.11-5.85.23-10.91.13-17.43-.07-4.85-.12-9.23.06-14.25.25-7.11-.27-12.52.88-15.51-.17-4.87.28-10.64.4-15.39.07-2.63.17-3.27.53-5.4 1.72-.65 1.25 9.5 2.32 12.07.06 6.73.45 12.41 1.07 17.67.07.8.12 0 .11-.55.36 1.22.21 4.94.9 4.52.14 7.1.69 14.22 1 21.37.07 1.66-.02 3.53.07 5.25.03.66.25 1.88.27 2.57.14 4.68-.21 12.07.33 15.74.4 2.74.2 17.33.32 24.7.09 5.95.29 11.65.34 17.32.04 4.41-.1 8.99.28 12.58-.31 3.68-.11 11.98-.04 15.83.02.82.26 1.39.27 2.04 0 .63-.2 2.2-.2 2.69-.09 4.6.13 9.6.18 14.19.08 7.4.1 15.62.53 22.54-.19 15.33.1 31.76.38 47.37-.49 1.94-.21 5.71-.24 9.03-.07 6.75-.84 13.73-.55 22.29-.12-.36-.19-.91-.26-1.52Z'
					style={{
						fill: "#f0d547",
						fillRule: "evenodd",
					}}
				/>
				<path
					d='M292.51 12.77c.75.34 2.12-.12 2.07-.3 1.02.36 1.9-.05 2.77.28 3.35-.25 7.24-.02 9.64-.15 1.99-.11 3.09-.45 5.37-.03 1.2.22 4.31.06 3.36.51 3.67-.21 7.14.31 9.17.11 1.22.36 2.45.71 4.53.84 1.93-.02 2.51-.29 4.21-.36 5.16.54 12.75.43 19 .67.28 1.16 5.09 1.11 5.95 2.12-.95.25-1.34.05-2.67.07.17.71-3.44.73-4.51 1.21-1.65.02-3.05-.04-4.34-.12-1.61.34-3.08.2-3.6.58-2.71-.32-9.44.55-13.88.39-1.36.2-1.89.56-3.58.7-5.21 0-10.18-.06-15.54.19-4.68.22-9.51.72-14.28.88-16.8.54-36.27 1.1-54.47 1.4-1.04.02-2.59.21-3.7.22-.91 0-1.77-.18-2.73-.16-2.16.04-4.31.29-6.38.3-.97 0-1.81-.18-2.74-.16-16.22.22-33.55 1.32-51.64 1.92-4.55.15-9.22.18-13.87.39-8.46.38-16.85.85-25.02.94-13.02.14-27.6-.25-37.18-.29-2.81-.01-5.62 0-8.6 0-5.94-.02-11.08-.07-17.71.13-4.92.15-9.37.26-14.47.16-7.22-.14-12.71.46-15.77-.64-4.94.24-10.81-.12-15.64-.17-2.67-.03-3.32-.12-5.49-.45-.68-1.71 9.63-1.4 12.22-2.5 6.84-.16 12.59-.64 17.92-1.34.81-.09 0-.13-.56-.1 1.23-.38 5.01-.28 4.58-.97 7.21-.25 14.43-.91 21.69-1.32 1.68-.1 3.59-.04 5.33-.15.67-.04 1.91-.28 2.61-.31 4.75-.21 12.26.03 15.98-.57 2.78-.44 17.59-.47 25.08-.7 6.04-.18 11.83-.47 17.59-.61 4.48-.11 9.13-.04 12.77-.48 3.74.25 12.16-.08 16.07-.21.84-.03 1.41-.28 2.07-.3.64-.01 2.24.16 2.74.16 4.67.02 9.75-.28 14.41-.4 7.51-.19 15.86-.34 22.88-.88 15.57-.05 32.25-.59 48.1-1.1 1.98.46 5.8.12 9.17.11 6.86-.03 13.96.63 22.64.21-.36.12-.92.21-1.54.28Z'
					style={{
						fill: "#3d855d",
						fillRule: "evenodd",
					}}
				/>
			</svg>
		</div>
	);
};

export default Figure;