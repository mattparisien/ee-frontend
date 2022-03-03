import { useTheme } from "@material-ui/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import IconButton from "@mui/material/IconButton";

import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";

function Footer() {
	const matches = useMediaQuery("(max-width: 1000px)");

	const socialLinks = [
		{
			name: "Instagram",
			href: "/",
			component: Instagram,
		},
		{
			name: "Facebook",
			href: "/",
			component: Facebook,
		},
		{
			name: "LinkedIn",
			href: "/",
			component: LinkedIn,
		},
	];

	return (
		<Box
			component='footer'
			sx={{
				height: matches ? "90vw" : "60vh",

				width: "100vw",
				zIndex: -1,
			}}
		>
			<SectionWrapper height='100%' bg='dark'>
				<Box sx={{ height: "100%" }}>
					<Box
						display='flex'
						height={"80%"}
						alignItems='center'
						justifyContent={matches ? "space-evenly" : "space-between"}
						flexDirection={matches ? "column" : "row"}
					>
						<Box
							className='footer-desktop-left'
							display='flex'
							flexDirection={"column"}
							justifyContent='center'
							alignItems={matches ? "center" : "start"}
							height={matches ? "auto" : "100%"}
						>
							<Typography
								variant='h1'
								sx={{ fontSize: matches ? "16vw" : "typography.h1" }}
							>
								Hear to listen
							</Typography>
							<Typography
								variant='h4'
								sx={{ fontSize: matches ? "6.2vw" : "3.3rem" }}
							>
								<a href='mailto:sammy@eyesandearsagency.com' target='_blank'>
									sammy@eyesandearsagency.com
								</a>
							</Typography>
						</Box>
						<Box width={matches ? "25vw" : "200px"}>
							<DrawnLogo color='light' />
						</Box>
					</Box>
					<Box
						className='bottom-navigation'
						sx={{
							boxSizing: "border-box",
							height: "20%",
							width: "100%",

							borderTop: "1px solid white",
							alignItems: "center",
							display: "flex",
							alignItems: "center",
						}}
					>
						<Typography variant='body1' component='span'>
							The Eyes & Ears Agency
						</Typography>
						<Box
							className='footer-navigation-socialLinks'
							sx={{
								marginLeft: "auto",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							{socialLinks.map((link, i) => {
								return (
									<a
										href={link.href}
										target='_blank'
										style={{ display: "inline-block", marginLeft: "2rem" }}
									>
										{React.createElement(link.component, {
											key: i,
											size: "small",
										})}
									</a>
								);
							})}
						</Box>
					</Box>
				</Box>
			</SectionWrapper>
		</Box>
	);
}

function DrawnLogo(props) {
	const theme = useTheme();

	useEffect(() => {
		console.log(theme);
	}, [theme]);

	const vibrationOuter = useRef(null);
	const vibrationCenter = useRef(null);
	const vibrationInner = useRef(null);
	const masterTimelineOne = useRef(
		gsap.timeline({ onComplete: () => masterTimelineOne.current.restart() })
	);

	const masterTimelineTwo = useRef(
		gsap.timeline({
			paused: true,
		})
	);
	const outerTimeline = useRef(gsap.timeline());
	const centerTimeline = useRef(gsap.timeline());
	const innerTimeline = useRef(gsap.timeline());

	useEffect(() => {
		if (vibrationOuter && vibrationCenter && vibrationInner) {
			const duration = 2;

			const outer = () => {
				outerTimeline.current
					.to(vibrationOuter.current, {
						x: "0",
						duration: duration,
						ease: "linear",
					})
					.to(
						vibrationOuter.current,
						{
							opacity: 1,
						},
						duration / 2
					)
					.to(
						vibrationOuter.current,
						{
							opacity: 0,
						},
						duration
					)
					.to(
						vibrationOuter.current,
						{
							transformOrigin: "center",
							scale: 1.5,
							duration: duration,
						},
						0
					);
				return outerTimeline.current;
			};

			const center = () => {
				centerTimeline.current
					.to(vibrationCenter.current, {
						x: "0",
						duration: duration,
						ease: "linear",
					})
					.to(
						vibrationCenter.current,
						{
							opacity: 1,
						},
						duration / 2
					)
					.to(
						vibrationCenter.current,
						{
							opacity: 0,
						},
						duration
					)
					.to(
						vibrationCenter.current,
						{
							transformOrigin: "center",
							scale: 1.5,
							duration: duration,
						},
						0
					);

				return centerTimeline.current;
			};

			const inner = () => {
				innerTimeline.current
					.to(vibrationInner.current, {
						x: "0",
						duration: duration,
						ease: "linear",
					})
					.to(
						vibrationInner.current,
						{
							opacity: 1,
						},
						duration / 2
					)
					.to(
						vibrationInner.current,
						{
							opacity: 0,
						},
						duration
					)
					.to(
						vibrationInner.current,
						{
							transformOrigin: "center",
							scale: 1.5,
							duration: duration,
						},
						0
					);
				return innerTimeline.current;
			};
			masterTimelineOne.current
				.set(vibrationInner.current, { opacity: 0 })
				.set(vibrationCenter.current, { opacity: 0 })
				.set(vibrationOuter.current, { opacity: 0 })
				.add(outer())
				.add(center(), 0.4)
				.add(inner(), 0.8)
				.timeScale(2);

			// masterTimelineTwo.current
			// 	.add(outer())
			// 	.add(center(), 0.4)
			// 	.add(inner(), 0.8)
			// 	.timeScale(2);
		}
	}, [vibrationOuter, vibrationCenter, vibrationInner]);

	return (
		<svg
			id='drawn-logo'
			data-name='Layer 1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 606.79 834.91'
			style={{ overflow: "visible" }}
		>
			<path
				className='faceLine'
				d='M74.07,377.25c.17-1.56.5-2.42.31-3.15-1.79-7.09-.1-14.08.89-21a289.79,289.79,0,0,1,5.86-31.72A176.24,176.24,0,0,1,94.6,285.75c10.25-20.2,26.14-35.7,41.22-51.91,4.63-5,10.64-7.91,17.2-9.93,12.48-3.84,25.36-4.79,38.22-6,3.5-.34,7-1.33,10.48-1.19,7.23.28,14.45,1.1,21.68,1.73a41.11,41.11,0,0,0,4.9.57c14.69-.51,27.85,4.27,40.27,11.56a33.47,33.47,0,0,1,13.86,16.22c1.17,2.71,3.08,5.13,4.06,7.89a39.49,39.49,0,0,1,2.13,9.59c.35,3.81,2.37,5.22,5.77,6.37a156.3,156.3,0,0,1,20.77,8.17c14.47,7.34,23.81,19.56,31.64,33.51a123.27,123.27,0,0,1,13.73,39.59c2.67,15.23,6,30.46,7.05,45.83,1.18,16.62,3,33.34,1,50.09-1,8.29-.92,16.74-2.34,24.94-1.58,9.24-4.3,18.28-6.53,27.4-1.89,7.75-3.69,15.52-5.69,23.23q-2.44,9.39-5.33,18.67c-.68,2.16-.64,3.62,1.65,4.49,6,2.29,12,4.93,18.14,6.78,5.91,1.77,11.82,3.27,17.13,6.59.59.37,2.75-.42,3-1.11,2.14-5.61,4.58-11.2,5.8-17,2.07-9.88,3.23-19.93,4.91-29.89,1-6.17,2.34-12.29,3.52-18.43a26.05,26.05,0,0,0,.58-3.25c.69-10.43,1.34-20.86,2-31.29.37-5.69.1-11.53,1.28-17.05,3.09-14.47,2.56-29.08,2.88-43.7.24-11.08,1.29-22.15,1.38-33.23a173.05,173.05,0,0,0-1.54-22c-1.28-10.45-3.62-20.79-4.4-31.26-.57-7.73.16-15.64,1.16-23.36,1.26-9.7-.15-19.08-1.76-28.53-.29-1.73-.87-3.54-.62-5.21,1.3-8.67-.27-17-1.72-25.54-1-6-1-12.24-1.64-18.34-.86-8-2-15.89-2.93-23.83s-1.71-16.12-2.86-24.14c-1.09-7.6-2.35-15.19-4-22.7-2.54-11.79-5.41-23.52-8.18-35.26-2.32-9.81-4.6-19.64-7.08-29.41-4-15.78-15.45-25.14-28.77-32.85-5.74-3.32-11.69-5.28-18.46-5-4.26.16-8.54-.87-12.82-1-14.68-.33-29.16,1.38-43.59,4-9.71,1.77-19.51,3.06-29.31,4.29-3,.37-5.92-.25-7.69-3.32-1.91-3.32-1.63-4.94,1.95-6.48a45.74,45.74,0,0,1,9.67-3.15c9.73-1.8,19.6-2.9,29.27-5,13.5-2.88,27.14-3.21,40.76-2.54,16.75.82,32.86,4.5,46.69,14.77,6.3,4.69,11.7,10.25,15.42,17.38,2.06,3.95,5.59,7.24,7.18,11.32,2.93,7.53,5,15.41,7.28,23.17,2.73,9.15,5.6,18.27,8,27.51,1.69,6.56,2.8,13.29,4,20,1.41,7.88,2.81,15.78,3.89,23.72.88,6.5,1.09,13.09,2,19.59.45,3.44,1.69,6.77,2.49,10.17.27,1.13.75,2.56.3,3.44-1.4,2.74-.68,5.24-.1,8,.65,3.09.47,6.35.94,9.49,1.19,7.91,2.72,15.77,3.74,23.69.66,5.09.56,10.27,1,15.39.48,6.12.87,12.25,1.79,18.31a68.81,68.81,0,0,1,0,19.65c-.91,6.93-.54,14-.39,21.07.11,5.37.62,10.74,1.22,16.07s1.6,10.77,2.33,16.17a43.79,43.79,0,0,1,.45,6.57c-.13,9.45-.43,18.89-.53,28.34,0,2.73.93,5.55.55,8.2-1.42,9.77.34,19.53-.3,29.26-.71,10.85-2,21.66-3,32.49-.3,3.29-.46,6.58-.7,9.88-.65,8.54-1.07,17.11-2,25.62-.93,8.3-2.44,16.53-3.66,24.79-.67,4.57-1.23,9.15-1.89,13.72-1.1,7.61-1.78,15.33-3.49,22.81-1.67,7.22-3.69,14.51-8.52,20.51-2.36,2.93-5.08,5.2-9.23,4.73a3.24,3.24,0,0,0-1.83.56c-5.65,3.29-11.23,2.56-16.57-.55-7.31-4.25-14.48-8.73-21.71-13.12-.1,0-.18-.13-.28-.17-6.06-2.65-6.63-4.81-11.36,2.85-6.87,11.14-16,20.54-28.29,25.28-11.53,4.44-19.89.13-21.84-12.59-1.25-8.09,1.73-15.73,7.14-21.56a30.61,30.61,0,0,1,20.7-9.63c4.18-.27,8.46,1,12.69,1.6,6.43,1,6.83.67,8.34-5.56,1.93-8,3.75-16,5.92-24s4.88-15.51,6.89-23.37A110.35,110.35,0,0,0,354,475c.7-6.2,1.21-12.42,1.67-18.64.59-8,.36-16.14,1.74-24a99,99,0,0,0,1.13-27.25A217.28,217.28,0,0,0,355,381c-2.56-12-5.71-23.87-8.74-35.76-3.83-15-12-27.73-21.31-39.81-7.25-9.39-17.31-14.32-28.33-17.61a2.89,2.89,0,0,0-2.35,1.55c-1.6,7.06-2.81,14.21-4.53,21.24a32.1,32.1,0,0,1-3.84,9.38c-3.28,5.2-7,10.1-10.69,15-5.29,7.12-12.78,10.84-21,13.45-5,1.59-9.81,4-14.9,5.17-7.12,1.69-14.41,3.5-21.65,3.67A332,332,0,0,1,181.69,356a133.41,133.41,0,0,1-42.27-10.57c-13.19-5.74-15.92-23.72-6.62-34.54,6.69-7.79,15.36-11.46,24.41-14.88,4.51-1.7,9.17-3,13.63-4.8,1-.41,1.89-2.11,2.07-3.32C174,280,177.46,274,185.24,271c2.66-1,5.19-2.36,7.82-3.48a59.73,59.73,0,0,1,33.54-4c2.81.45,5.71.3,8.56.56q14.93,1.35,29.85,2.81c4.92.49,9.82,1.17,14.73,1.71,2.46.27,2.65-1.34,1.88-2.93-2.13-4.4-3.86-9.2-6.86-12.94-5.84-7.25-12-14.48-21.31-17.61-8.85-3-17.68-5.83-27.27-5.58-5.47.14-11-.88-16.46-1.05-11.32-.35-22.25,2-33.08,5.08a33,33,0,0,1-9.43,1.15c-6.58-.11-12,2.84-16.94,6.46-10.84,8-20.33,17.45-29.26,27.52-11.66,13.13-20.41,27.73-23.77,45.2-2.27,11.85-5,23.64-6.77,35.56-1,6.78-.6,13.77-.8,20.68,0,1.2.19,2.41.2,3.62a35.53,35.53,0,0,0,2.7,14.36c2.18,5,2.85,10.76,3.47,16.27,1.14,10.27,2.07,20.57,2.5,30.88.27,6.45-.86,12.95-.79,19.42.11,10.89,1,21.77,1,32.66.08,22.57-.18,45.15-.29,67.73,0,5.61,0,11.23,0,16.84-.08,4.62-.71,9.25-.46,13.84.35,6.37,1.26,12.72,2,19.08.17,1.52.47,3,.75,4.55,1.85,10,3.32,20.16,5.69,30.08a214.12,214.12,0,0,0,8.24,27.05,255.3,255.3,0,0,0,13.56,30c3.46,6.42,8.38,12.12,13.13,17.74,10.1,11.91,20.33,23.73,30.89,35.23,4.05,4.42,9.43,7.59,13.73,11.81,7.93,7.78,15.24,16.2,23.3,23.82,8.46,8,17.44,15.45,26.3,23,7.19,6.14,14.54,12.1,21.82,18.14.34.28.59.7,1,.9,6.55,3.54,12.9,7.58,19.74,10.42a135.29,135.29,0,0,0,21.63,6.67c6.48,1.48,13.27,3,19.8,2.52,8.18-.56,16.75.27,24.49-3.89a58.43,58.43,0,0,0,16.83-13.58c5.79-6.75,12.23-13.09,15-21.86,2.49-7.92,4.8-15.91,6.85-24,1.51-5.93,2.54-12,3.64-18,.48-2.58.63-5.22.88-7.83.2-2-.88-2.51-2.8-2.6q-13.15-.66-26.29-1.63c-8.11-.6-16.22-1.29-24.31-2.16-9.36-1-18.89-1.42-26.62-8.07-5-4.29-6-10.93-1.33-15.62a53.45,53.45,0,0,1,11.85-8.77c5.63-3.12,11.77-5.3,17.55-8.17,8.29-4.1,17.29-5.09,26.22-5.74,8.39-.61,16.9-1.3,25.25,1.18,6.35,1.88,12.06,4.75,13.47,11.62.91,4.39.1,9.18-.17,13.77-.17,2.93-.77,5.84-1.29,9.56,2.07-.45,3.79-.54,5.25-1.2,11.06-4.94,22-10,33.1-15,9.17-4.13,17.22-9.77,22.72-18.29,2.4-3.7,3.74-8.11,5.34-12.29A2.22,2.22,0,0,0,463,691q-5.55-.35-11.13-.47c-1.64,0-3.31.46-4.93.3-19.69-1.93-39.37-1.29-59,.37-14.08,1.18-27.9-.88-41.63-3.47a50.87,50.87,0,0,0-25,1.43c-8.34,2.61-16.44,6-24.78,8.66a151.56,151.56,0,0,1-20.05,5.14c-7.57,1.31-13.94-1.51-18.14-8.11-3.21-5.07-2.45-10.47.35-15.35,8.64-15.05,21.58-24.89,37.88-30.56a47.83,47.83,0,0,1,25.93-2,19.15,19.15,0,0,0,4.28.29c8.63-.19,16.68,2.25,24.53,5.47,4.72,2,8.92,1.77,13.31-1.37a188.59,188.59,0,0,1,18.6-11.78c7.86-4.34,16.38-3.48,24.77-1.75,7.66,1.58,13.88,5.68,19.27,11.3a33.92,33.92,0,0,0,22.56,10.74c10.7.92,18.85,6.22,21.8,17.48.6,2.3,2,4.13,4.76,3.32,3.86-1.13,8-2,11.39-3.9,4.85-2.73,9.23-6.31,13.76-9.61,2.78-2,5.63-2.33,7.5-.57,2,1.93,2.22,5.11-.33,7.69-8.2,8.31-17.39,15.18-29.26,17.29-2.43.44-3.35,1.19-3.76,3.83-1.33,8.52-4.67,16-11,22.3-10.73,10.49-23,18.68-36.19,25.62-3.59,1.9-8,2.16-12,3.45-5.83,1.9-11.59,4-17.33,6.15-.71.26-1.66,1.47-1.56,2.08,1.55,9-.85,17.56-2.76,26.09-2.22,9.93-5.12,19.71-8,29.46s-9.51,17-15.69,24.56c-2.09,2.56-4,5.23-6.08,7.82-7.31,9.26-17,15.36-28.56,15.89-23.79,1.09-46.78-2.5-67.71-15.2-5.65-3.43-12.36-5.07-18.22-8.21a72.45,72.45,0,0,1-12.55-9q-21.39-18.4-42.45-37.19c-4.66-4.18-8.67-9.07-13.06-13.55-6.69-6.8-13.47-13.52-20.18-20.29-12.32-12.44-24.58-24.9-34.87-39.16-9.69-13.41-18-27.59-23.86-43-3.16-8.28-6.13-16.67-8.6-25.17a103.78,103.78,0,0,1-3.14-17.17c-1.39-12.12-2.42-24.27-3.59-36.41-.59-6.13-1.2-12.25-1.72-18.39-.21-2.42-.84-3-3.54-2.34-12.46,3.14-24.68,2.27-37-1.75-7.43-2.42-12.69-6.29-15.38-13.5a53.34,53.34,0,0,1-1.64-7c-2.16-9.62-3.54-19.26-.66-29,1.65-5.57,3.52-11.07,5-16.68a58.19,58.19,0,0,0,1.37-24.1c-1.2-8-3.29-15.38-7.74-22.13S18,446.05,13.87,439.18a37.77,37.77,0,0,1-5.53-18.43A148.63,148.63,0,0,1,9,403.61c.39-4.3,2.83-7.74,5.74-10.89,6.37-6.9,12.94-13.66,21.58-17.59,6.66-3,13.55-5.6,21.15-5.64a19,19,0,0,1,13.7,5.4C71.88,375.58,72.72,376.17,74.07,377.25Zm9,51.47a9.08,9.08,0,0,0,.5-2c-.38-7.59-.68-15.18-1.3-22.75A8.27,8.27,0,0,0,80,399.29c-3.5-3.64-7.34-6.93-10.91-10.5-7.24-7.22-15.38-9.4-25.25-5.79-10.91,4-22.87,12-22.1,27.59.22,4.56-.11,9.59,1.71,13.53a165.37,165.37,0,0,0,13.6,24c7.52,11,12.36,22.81,10.72,36.14-1.46,12-4.53,23.71-6.59,35.61-1.71,9.92-2.58,19.92.89,29.71,1.42,4,2.46,8.5,6.85,10.44,4.72,2.08,9.55,3.9,14.91,3.67a50,50,0,0,1,8.91.31c4.26.59,7.79-1,11.16-3.14a3.72,3.72,0,0,0,1.55-2.58c0-11.35-.07-22.69-.13-34,0-2.62-1.14-3-3.35-1.94a42.65,42.65,0,0,1-7.31,3c-9.12,2.36-14.51.32-17.34-7.66-1-2.89-.91-6.31-.78-9.47.37-8.56.79-17.14,1.62-25.67,1.17-11.89-.25-23.19-6.05-33.8-2.77-5.09-3.37-10.66-2.71-16.33,1-8.36,5.6-13.55,14.54-13.29,7,.21,13.15,2.33,17.46,8.29A11.57,11.57,0,0,0,83.05,428.72ZM209,346.4l.09-.82c10,.21,19.78-.79,29.09-4.57,6.46-2.62,13.16-4.79,18.5-9.76,7.09-6.57,13.73-13.57,17.49-22.5,3.14-7.44,5.18-15.35,7.53-23.11.74-2.41.43-4.65-2.91-5-3.16-.31-6.31-.73-9.46-1.15-6-.81-12.36-.38-17.76-4.06A3.29,3.29,0,0,0,250,275c-5.37-.4-10.75-.79-16.13-1.14-4.16-.28-8.33-.49-12.5-.73-2.48-.14-5-.43-7.43-.35s-5,.67-7.53.76c-8.61.3-14.38,5.27-19.32,11.6a2.74,2.74,0,0,0-.49,2.34c.3.53,1.5.81,2.27.75,6.9-.46,13.85-.66,20.68-1.65,11-1.59,21.68.79,32.42,2.18,2.05.27,4.47,2.27,5.56,4.14a21.76,21.76,0,0,1,2.43,8.41c1.73,15.4-.88,22.51-14.85,28.14-6.73,2.72-14.17,2.37-21.48,2-7.14-.37-13.5-3.16-19.79-5.8-5.63-2.36-10.77-6-13.6-12q-2.55-5.34-5-10.72c-.83-1.8-2-2.36-4-1.71-5.72,1.89-11.52,3.51-17.23,5.43a26.81,26.81,0,0,0-15.48,12.52c-3.56,6.32-2.13,11.5,4.48,14.57a84.69,84.69,0,0,0,25.74,7.76C182.18,343.13,195.59,344.78,209,346.4ZM462.47,679c-2.93-7.63-9-9.49-15.26-10.23-9.87-1.17-18.83-4.07-25-12.17-5.33-7-12.44-10.32-20.66-11.63-3.72-.59-8-1.1-11.35.2-8.08,3.18-14.82,8.69-21,14.8a11.85,11.85,0,0,1-4.44,2.52,58.51,58.51,0,0,1-5.81,1.15c-4.31,1-8.18-.24-12.13-1.84-4.76-1.92-9.62-4.44-14.57-4.82-13.63-1-27.15.24-40.12,5.09-10.91,4.09-17.43,13.2-24.12,21.82-3.16,4.08,0,10.76,5.45,9.93a129.44,129.44,0,0,0,20.94-5.19c7.78-2.55,15.13-6.6,23-8.65,7-1.82,14.37-3.1,21.86-2.08,7.83,1.07,15.71,2.27,23.6,2.47,11.2.27,22.42-.37,33.63-.53q31.38-.47,62.76-.84Zm-98.23,36.09c-2.42,0-4.84,0-7.26,0-5.63-.06-11.16.28-16.35,2.9-5,2.52-10,5.09-15.18,7.1a18.94,18.94,0,0,0-9.88,8.26c-.86,1.47-1.86,3.92-1.22,5,.8,1.31,3.17,2.18,4.94,2.31,14.9,1.05,29.82,1.94,44.74,2.76,5.71.31,11.43.52,17.14.42,5.47-.09,5.47-.29,6.18-5.62.08-.54.24-1.07.32-1.61.68-4.66,1.38-9.32,2-14a4.94,4.94,0,0,0-3.6-5.63,35.52,35.52,0,0,0-8.64-1.79C373.05,714.9,368.63,715.12,364.24,715.12ZM215.8,294v.5c-3.3,0-6.64-.33-9.9.07-6.19.75-12.36,1.81-18.48,3a4.39,4.39,0,0,0-3,2.59c-.71,4-.65,7.86,3.16,10.7,9.44,7,19.89,11.07,31.7,10.05,9-.77,16.62-4.54,20.62-13.28,3.85-8.39,2.34-11.33-7.3-12.73C227.08,294.07,221.41,294.23,215.8,294Zm-132,137.51c-4.39,2.4-7.7,1.45-11.11-.21a20,20,0,0,0-6.55-1.94c-3.34-.34-5.06,1.31-4.77,4.65a26.59,26.59,0,0,0,1.86,7.87c1.9,4.53,4.37,8.81,6.37,13.3,5.48,12.34,5.53,25.05,2.71,38.05a101.81,101.81,0,0,0-1.77,15.32c-.2,3.23,1.69,4.24,4.68,3,1.93-.79,3.85-1.6,5.83-2.23,3-1,4.28-2.65,4.16-6.05-.61-17.59-1-35.19-1.39-52.78C83.7,444.43,83.81,438.4,83.81,431.47Zm221.8,144.78a13,13,0,0,0,1.89-.42c10.83-3.75,18.36-11.29,23.89-21,1.05-1.86-.38-2.25-1.92-2.24-6,0-11.92.69-17.2,3.64-5,2.78-10.65,4.91-12.92,11C297.67,571.79,300.44,576.2,305.61,576.25Z'
				transform='translate(96.32 -24.01)'
				fill='white'
			/>
			<path
				className='vibration vibration-outer'
				d='M-62.75,426.45c5-.11,7.46,3.11,5.64,6.41a107.9,107.9,0,0,1-8.3,12.24c-10.92,14.61-14.39,31.26-12.64,49,1,9.85,6.91,17.65,13.43,24.86,1.76,2,3.77,3.87,4.85,6.18.82,1.74,1.16,4.78.18,6s-4.1,1.58-5.89,1c-13-4-21.44-13.07-26.22-25.48a66.83,66.83,0,0,1-3.73-35.29A54.43,54.43,0,0,1-81,442.3c4-4.25,8-8.44,12.34-12.34C-66.76,428.2-64.1,427.22-62.75,426.45Z'
				transform='translate(96.32 -24.01)'
				ref={vibrationOuter}
				fill='yellow'
			/>
			<path
				className='vibration vibration-center'
				d='M-29.34,438.88c4.32,0,5.65,2.07,4.35,4.59-1,1.86-2.05,3.64-3.17,5.41-6.79,10.79-9.4,22.8-10.55,35.3-.84,9.2,3.19,16.61,8.09,23.8a47.49,47.49,0,0,1,3.17,5c1,2,1.9,4.14-.12,6.07a4.83,4.83,0,0,1-6.39.6,90.91,90.91,0,0,1-11.58-9.14c-8.69-8.62-9.9-19.69-8.36-31C-52,465.46-46.33,452.89-36,442.87-33.89,440.84-30.87,439.77-29.34,438.88Z'
				transform='translate(96.32 -24.01)'
				ref={vibrationCenter}
				fill='yellow'
			/>
			<path
				className='vibration vibration-inner'
				d='M-22.25,474.43c0-9.88,9-22.19,17.65-23.86,2.16-.41,5.31-.42,6.66.83,2.18,2,1.35,5.16.2,8A168,168,0,0,0-4,476.71c-2.49,8.84-1,16.32,7.32,21.18,1.9,1.11,4.08,3,2.72,5.28a6.67,6.67,0,0,1-5.32,2.69c-3.14-.35-6.72-1.19-9.1-3.09C-17.36,495.59-22.31,486.16-22.25,474.43Z'
				transform='translate(96.32 -24.01)'
				ref={vibrationInner}
				fill='yellow'
			/>
			<path
				className='eye'
				d='M215.8,294c5.61.27,11.28.11,16.8.91,9.64,1.4,11.15,4.34,7.3,12.73-4,8.74-11.64,12.51-20.62,13.28-11.81,1-22.26-3-31.7-10.05-3.81-2.84-3.87-6.73-3.16-10.7a4.39,4.39,0,0,1,3-2.59c6.12-1.2,12.29-2.26,18.48-3,3.26-.4,6.6-.07,9.9-.07Z'
				transform='translate(96.32 -24.01)'
				fill='yellow'
			/>
			<path
				className='ear'
				d='M83.81,431.47c0,6.93-.11,13,0,19,.39,17.59.78,35.19,1.39,52.78.12,3.4-1.17,5.09-4.16,6.05-2,.63-3.9,1.44-5.83,2.23-3,1.22-4.88.21-4.68-3a101.81,101.81,0,0,1,1.77-15.32c2.82-13,2.77-25.71-2.71-38.05-2-4.49-4.47-8.77-6.37-13.3A26.59,26.59,0,0,1,61.38,434c-.29-3.34,1.43-5,4.77-4.65a20,20,0,0,1,6.55,1.94C76.11,432.92,79.42,433.87,83.81,431.47Z'
				transform='translate(96.32 -24.01)'
			/>
			<path
				className='nose'
				d='M305.61,576.25c-5.17,0-7.94-4.46-6.26-9,2.27-6.14,7.93-8.27,12.92-11,5.28-3,11.21-3.62,17.2-3.64,1.54,0,3,.38,1.92,2.24-5.53,9.74-13.06,17.28-23.89,21A13,13,0,0,1,305.61,576.25Z'
				transform='translate(96.32 -24.01)'
			/>
		</svg>
	);
}

export default Footer;
