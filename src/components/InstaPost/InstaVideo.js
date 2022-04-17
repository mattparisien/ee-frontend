import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { CardMedia } from "@mui/material";
import useAspectRatio from "./helpers/useAspectRatio";

const InstaVideo = ({ src, preserveAspectRatio }) => {

	

	const aspect = useAspectRatio(src);

	const [played, setPlayed] = useState(false);
	const videoRef = useRef(null);

	const videoWrapper = {
		overflow: "hidden",
		width: "100%",
		aspectRatio: `1 / ${preserveAspectRatio ? aspect : 1}`,
		position: "relative",
		"&:hover button": {
			opacity: 1,
		},
		video: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			objectPosition: "center",
		},
	};

	const controlsWrap = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	const button = {
		width: "5rem",
		height: "5rem",
		opacity: played ? 0 : 0.5,
		transition: "500ms ease",
		"&:hover": {
			opacity: 1,
		},

		svg: {
			fill: "black",
			width: "100%",
			height: "100%",
		},
	};

	const handleClick = () => {
		setPlayed(!played);
	};

	useEffect(() => {
		played ? videoRef.current.play() : videoRef.current.pause();
	}, [played]);

	return (
		<CardMedia className='video-wrapper' sx={videoWrapper}>
			<Box
				component='video'
				muted
				playsInLine
				loop
				src={src}
				ref={videoRef}
			></Box>
			<Box className='controls-overlay' sx={controlsWrap}>
				<IconButton sx={button} onClick={handleClick}>
					{!played ? <PlayArrowIcon /> : <PauseIcon />}
				</IconButton>
			</Box>
		</CardMedia>
	);
};

export default InstaVideo;
