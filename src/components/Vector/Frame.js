import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion/dist/framer-motion";

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

	const xVariants = {
		initial: {
			scaleX: 0,
			transformOrigin: "left",
		},
		visible: {
			scaleX: 1,
			transition: {
				ease: [1, 0, 0, 1],
				duration: 0.5,
				delay: 6,
			},
		},
		exit: {
			scaleX: 0,
			transformOrigin: "left",
		},
	};

	const yVariants = {
		initial: {
			scaleY: 0,
		},
		visible: {
			scaleY: 1,
			transition: {
				ease: [1, 0, 0, 1],
				duration: 0.5,
				delay: 6,
			},
		},
		exit: {
			scaleY: 0,
		},
	};

	return (
		<Box
			sx={props.sx}
			className={`c-frame ${
				!props.static ? "c-frame_hover" : "c-frame_static"
			}`}
		>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1159.18 33.35'
				className='c-frame_svg c-frame_svg_green'
			>
				<motion.path
					variants={xVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
					d='M226.39 30.18c-2.55-1.06-7.28.27-7.1.8-3.46-1.11-6.51.05-9.48-.98-11.51.59-24.82-.28-33.08 0-6.84.24-10.63 1.21-18.42-.16-4.09-.72-14.78-.37-11.49-1.67-12.6.46-24.47-1.24-31.45-.73-4.17-1.12-8.36-2.24-15.48-2.71-6.63-.02-8.63.76-14.45.88-17.68-1.85-43.71-1.86-65.15-2.88-.91-3.48-17.41-3.54-20.29-6.61 3.28-.71 4.6-.09 9.17-.1C8.62 13.88 21 14 24.71 12.6c5.67.02 10.46.25 14.87.55 5.55-.96 10.58-.47 12.39-1.58 9.28 1.1 32.39-1.24 47.62-.53 4.67-.55 6.49-1.59 12.3-1.94 17.88.25 34.92.64 53.31.12 16.08-.45 32.66-1.74 49.04-1.99 57.65-.86 124.47-1.68 186.91-1.73 3.58 0 8.9-.52 12.7-.5 3.14.02 6.08.63 9.36.61 7.4-.02 14.79-.67 21.88-.6 3.32.03 6.21.61 9.37.61 55.63.08 115.15-2.43 177.22-3.42 15.6-.25 31.65-.12 47.6-.53C708.32.94 737.11-.09 765.15 0c44.68.16 94.66 1.99 127.51 2.55 9.64.16 19.29.23 29.51.39 20.38.33 38.01.7 60.74.4 16.88-.22 32.15-.37 49.65.17 24.76.76 43.63-.81 54.05 2.64 16.96-.51 37.08.84 53.64 1.2 9.15.2 11.38.51 18.82 1.59 2.25 5.17-33.1 3.76-42.05 6.95-23.46.18-43.23 1.34-61.55 3.22-2.78.22-.01.38 1.93.33-4.24 1.08-17.21.63-15.75 2.7-24.75.42-49.54 2.07-74.46 2.99-5.78.22-12.31-.05-18.3.2-2.28.1-6.55.76-8.97.82-16.3.41-42.07-.64-54.83.98-9.55 1.21-60.37.6-86.06.96-20.74.28-40.59.87-60.35 1.03-15.36.12-31.33-.29-43.84.85-12.81-.92-41.72-.32-55.14-.11-2.87.05-4.85.79-7.1.8-2.21 0-7.67-.59-9.37-.61-16.03-.28-33.46.4-49.45.55-25.77.23-54.41.31-78.52 1.59-53.43-.56-110.66.3-165.04 1.12-6.76-1.47-19.9-.63-31.45-.73-23.53-.22-47.84-2.51-77.65-1.66 1.25-.35 3.18-.58 5.3-.78Z'
					style={{ transformOrigin: "left" }}
				/>
			</motion.svg>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 23.75 1159.17'
				{...props}
				className='c-frame_svg c-frame_svg_yellow'
			>
				<motion.path
					variants={yVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
					d='M19.84 930.74c.19-5.01 1.3-14.59 1.23-18.86-.21-12.31.32-26.55.35-40.48.02-9.6.55-13.68.91-20.66.28-5.32-.32-11.12-.29-16.39.06-11.06.72-22.33.9-33.69 1.49-100.62.4-192.03.64-282.63-.31-4.24-1.29-6.12-1.13-11.98 1.85-15.09.53-32.79.33-53.49-.34-36.8.33-80.43-.19-115.57-.06-4-.67-7.96-.77-11.8-.46-17.39.42-35.4-1.22-49.43.59-28.19.53-58.05-1.08-81.89 1.48-8.01.36-16.91.28-24.25-.09-7.9.32-12 .15-19.43-.77-35.7-.33-68.55-1.37-98.33.69-3.82 1.03-9.62.75-14.23-2.13-3.15-4.13-6.75-3.87-18.33-1.62-2.54-1.93-3.07-3.13-4.93C13.55 6.46 11.78 1.06 9.82 0c-.6 18.71-.4 40.84-3.95 53.17-.39 4.76.21 6.04.1 9.82C1.78 85.14.31 123.59 0 150.86c1.56 20.28.55 39 .52 62.07 1.94 8.1.5 19.48.3 29.44-.15 7.79.71 18.59.71 28.02 0 12.95-.83 21.03.66 29.62-.67 4.34-.12 5.03-.66 11.05.42 3.73.71 7.88.78 11.8.54 30.38-.31 64.45 1.23 90.1-.55 1.8-.55 6.77-.66 11.03.62 11.76.38 23.9.58 32.84.16 7.12-.5 12.12-.51 19.22-.02 9.15.64 19.02.7 28.04.26 35.46.27 76.44.25 99.35-.02 27.11.3 52.05.1 78.11-.17 22.03.42 38.04.29 57.07-.06 10.07-.71 20.25-.81 30.46-.16 15.86 1.22 32.11-.25 50.29.23 4.49.56 8.63.73 13.39-.74 50.31.43 99.23-1.41 161.88-.11 5.69 1.27-2.77 1.03 2.18.46 16.39-.61 29.8-.48 45.29.03 3 .56-.54.67 1.97.24 5.41-.23 14.14.56 19.82.53 3.84 1.86 1.47 1.62 7.37-.36 6.1.42 8.17-.03 14.61 2.05 4.64 1.3 13.67 1.55 23.6.16 6.6 1.06 14.84 1.23 21.82.27 11.21-.71 19.88 0 27.63.84 1.12.85-2.5 1.83-.65 2.01-13.18 3.16-27.95 3.13-35.72-.04-9.89 1.78-20.37 1.29-35.1.13-4.48.88 4.35.8-2.81.19-3.08-.4-3.44-.59-5.2 1.91.33 1.92-23.26 1.09-27.06-.11 1.85-.06 4.59-.49 4.63.18-5.07.32-24.86 1.21-31.88.47 5.81-.9 10.57-.07 16.23.7-15.1 1.44-25.65 1.34-36.68-1.17-.93-.42 13.07-1.54 17.03.12-10.23.9-25.04.81-30.44.52-3.75 1.38 4.68 1.51-2.46.88-21.01.15-39.87.82-58.1Zm-1.63 47.91c.08 7.02-.14-12.64 0 0Zm.92-48.31c1.04 1.64-.43 3.25-.17 6.44-.88-.72.04-5.51.17-6.44Zm-.82 17.45c.08-3.19.17-6.4.26-9.61.52.59 1.16 11.24-.26 9.61Zm-2.68 114.04c.79.62-.03 6.88.11 9.82-.79-.63.03-6.9-.11-9.82Z'
					style={{
						fillRule: "evenodd",
					}}
				/>
			</motion.svg>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 23.75 1159.17'
				{...props}
				className='c-frame_svg c-frame_svg_blue'
			>
				<motion.path
					variants={xVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
					d='M19.84 930.74c.19-5.01 1.3-14.59 1.23-18.86-.21-12.31.32-26.55.35-40.48.02-9.6.55-13.68.91-20.66.28-5.32-.32-11.12-.29-16.39.06-11.06.72-22.33.9-33.69 1.49-100.62.4-192.03.64-282.63-.31-4.24-1.29-6.12-1.13-11.98 1.85-15.09.53-32.79.33-53.49-.34-36.8.33-80.43-.19-115.57-.06-4-.67-7.96-.77-11.8-.46-17.39.42-35.4-1.22-49.43.59-28.19.53-58.05-1.08-81.89 1.48-8.01.36-16.91.28-24.25-.09-7.9.32-12 .15-19.43-.77-35.7-.33-68.55-1.37-98.33.69-3.82 1.03-9.62.75-14.23-2.13-3.15-4.13-6.75-3.87-18.33-1.62-2.54-1.93-3.07-3.13-4.93C13.55 6.46 11.78 1.06 9.82 0c-.6 18.71-.4 40.84-3.95 53.17-.39 4.76.21 6.04.1 9.82C1.78 85.14.31 123.59 0 150.86c1.56 20.28.55 39 .52 62.07 1.94 8.1.5 19.48.3 29.44-.15 7.79.71 18.59.71 28.02 0 12.95-.83 21.03.66 29.62-.67 4.34-.12 5.03-.66 11.05.42 3.73.71 7.88.78 11.8.54 30.38-.31 64.45 1.23 90.1-.55 1.8-.54 6.77-.66 11.03.62 11.76.38 23.9.58 32.84.16 7.12-.5 12.12-.51 19.22-.02 9.15.64 19.02.7 28.04.26 35.46.27 76.44.25 99.35-.02 27.11.3 52.05.1 78.11-.17 22.03.42 38.04.29 57.07-.06 10.07-.71 20.25-.81 30.46-.16 15.86 1.22 32.11-.25 50.29.23 4.49.56 8.63.73 13.39-.74 50.31.43 99.23-1.41 161.88-.11 5.69 1.27-2.77 1.03 2.18.46 16.39-.61 29.8-.48 45.29.03 3 .56-.54.67 1.97.24 5.41-.23 14.14.56 19.82.53 3.84 1.86 1.47 1.62 7.37-.36 6.1.42 8.17-.03 14.61 2.05 4.64 1.3 13.67 1.55 23.6.16 6.6 1.06 14.84 1.23 21.82.27 11.21-.71 19.88 0 27.63.84 1.12.85-2.5 1.83-.65 2.01-13.18 3.16-27.95 3.13-35.72-.04-9.89 1.78-20.37 1.29-35.1.13-4.48.88 4.35.8-2.81.19-3.08-.4-3.44-.59-5.2 1.91.33 1.92-23.26 1.09-27.06-.11 1.85-.06 4.59-.49 4.63.18-5.07.32-24.86 1.21-31.88.47 5.81-.9 10.57-.07 16.23.7-15.1 1.44-25.65 1.34-36.68-1.17-.93-.42 13.07-1.54 17.03.12-10.23.9-25.04.81-30.44.52-3.75 1.38 4.68 1.51-2.46.88-21.01.15-39.87.82-58.1Zm-1.63 47.91c.08 7.02-.14-12.64 0 0Zm.92-48.31c1.04 1.64-.43 3.25-.17 6.44-.88-.72.04-5.51.17-6.44Zm-.82 17.45c.08-3.19.17-6.4.26-9.61.52.59 1.16 11.24-.26 9.61Zm-2.68 114.04c.79.62-.03 6.88.11 9.82-.79-.63.03-6.9-.11-9.82Z'
					style={{
						fillRule: "evenodd",
					}}
				/>
			</motion.svg>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1159.18 22.23'
				{...props}
				className='c-frame_svg c-frame_svg_red'
			>
				<motion.path
					d='M226.39 20.12c-2.55-.71-7.28.18-7.1.54-3.46-.74-6.51.04-9.48-.65-11.51.39-24.82-.19-33.08 0-6.84.16-10.63.8-18.42-.1-4.09-.48-14.78-.24-11.49-1.12-12.6.31-24.47-.83-31.45-.49-4.17-.75-8.36-1.49-15.48-1.81-6.63-.02-8.63.51-14.45.59-17.68-1.23-43.71-1.24-65.15-1.92-.91-2.32-17.41-2.37-20.29-4.41 3.28-.47 4.6-.06 9.17-.07C8.62 9.25 21 9.33 24.71 8.4c5.67.02 10.46.16 14.87.37 5.55-.64 10.58-.31 12.39-1.05 9.28.73 32.39-.82 47.62-.36 4.67-.36 6.49-1.06 12.3-1.29 17.88.17 34.92.43 53.31.08 16.08-.3 32.66-1.16 49.04-1.32 57.65-.58 124.47-1.12 186.91-1.15 3.58 0 8.9-.35 12.7-.33 3.14.01 6.08.42 9.36.41 7.4-.02 14.79-.45 21.88-.4 3.32.02 6.21.41 9.37.41 55.63.05 115.15-1.62 177.22-2.28 15.6-.17 31.65-.08 47.6-.36C708.32.63 737.11-.06 765.15 0c44.68.11 94.66 1.32 127.51 1.7 9.64.11 19.29.15 29.51.26 20.38.22 38.01.47 60.74.27 16.88-.15 32.15-.25 49.65.11 24.76.51 43.63-.54 54.05 1.76 16.96-.34 37.08.56 53.64.8 9.15.13 11.38.34 18.82 1.06 2.25 3.45-33.1 2.5-42.05 4.64-23.46.12-43.23.89-61.55 2.14-2.78.15-.01.25 1.93.22-4.24.72-17.21.42-15.75 1.8-24.75.28-49.54 1.38-74.46 2-5.78.14-12.31-.04-18.3.14-2.28.07-6.55.51-8.97.55-16.3.27-42.07-.43-54.83.65-9.55.8-60.37.4-86.06.64-20.74.19-40.59.58-60.35.69-15.36.08-31.33-.19-43.84.57-12.81-.62-41.72-.21-55.14-.07-2.87.03-4.85.53-7.1.53-2.21 0-7.67-.39-9.37-.41-16.03-.19-33.46.27-49.45.37-25.77.16-54.41.21-78.52 1.06-53.43-.38-110.66.2-165.04.75-6.76-.98-19.9-.42-31.45-.49-23.53-.14-47.84-1.67-77.65-1.11 1.25-.23 3.18-.39 5.3-.52Z'
					style={{
						fillRule: "evenodd",
					}}
					variants={xVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
					d='M226.39 30.18c-2.55-1.06-7.28.27-7.1.8-3.46-1.11-6.51.05-9.48-.98-11.51.59-24.82-.28-33.08 0-6.84.24-10.63 1.21-18.42-.16-4.09-.72-14.78-.37-11.49-1.67-12.6.46-24.47-1.24-31.45-.73-4.17-1.12-8.36-2.24-15.48-2.71-6.63-.02-8.63.76-14.45.88-17.68-1.85-43.71-1.86-65.15-2.88-.91-3.48-17.41-3.54-20.29-6.61 3.28-.71 4.6-.09 9.17-.1C8.62 13.88 21 14 24.71 12.6c5.67.02 10.46.25 14.87.55 5.55-.96 10.58-.47 12.39-1.58 9.28 1.1 32.39-1.24 47.62-.53 4.67-.55 6.49-1.59 12.3-1.94 17.88.25 34.92.64 53.31.12 16.08-.45 32.66-1.74 49.04-1.99 57.65-.86 124.47-1.68 186.91-1.73 3.58 0 8.9-.52 12.7-.5 3.14.02 6.08.63 9.36.61 7.4-.02 14.79-.67 21.88-.6 3.32.03 6.21.61 9.37.61 55.63.08 115.15-2.43 177.22-3.42 15.6-.25 31.65-.12 47.6-.53C708.32.94 737.11-.09 765.15 0c44.68.16 94.66 1.99 127.51 2.55 9.64.16 19.29.23 29.51.39 20.38.33 38.01.7 60.74.4 16.88-.22 32.15-.37 49.65.17 24.76.76 43.63-.81 54.05 2.64 16.96-.51 37.08.84 53.64 1.2 9.15.2 11.38.51 18.82 1.59 2.25 5.17-33.1 3.76-42.05 6.95-23.46.18-43.23 1.34-61.55 3.22-2.78.22-.01.38 1.93.33-4.24 1.08-17.21.63-15.75 2.7-24.75.42-49.54 2.07-74.46 2.99-5.78.22-12.31-.05-18.3.2-2.28.1-6.55.76-8.97.82-16.3.41-42.07-.64-54.83.98-9.55 1.21-60.37.6-86.06.96-20.74.28-40.59.87-60.35 1.03-15.36.12-31.33-.29-43.84.85-12.81-.92-41.72-.32-55.14-.11-2.87.05-4.85.79-7.1.8-2.21 0-7.67-.59-9.37-.61-16.03-.28-33.46.4-49.45.55-25.77.23-54.41.31-78.52 1.59-53.43-.56-110.66.3-165.04 1.12-6.76-1.47-19.9-.63-31.45-.73-23.53-.22-47.84-2.51-77.65-1.66 1.25-.35 3.18-.58 5.3-.78Z'
				/>
			</motion.svg>
		</Box>
	);
};

export default Frame;
