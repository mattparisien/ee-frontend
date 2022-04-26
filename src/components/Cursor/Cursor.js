import React, { useEffect, useContext } from "react";
import { CursorContext } from "../../context/Context";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

function Cursor() {
	const cursorControls = useContext(CursorContext);
	const theme = useTheme();

	useEffect(() => {
		const canvas = document.getElementById("scene");
		const ctx = canvas.getContext("2d");
		let width = window.innerWidth;
		let height = window.innerHeight;
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let ballX = x;
		let ballY = y;
		handleResize();

		function drawBall() {
			ctx.beginPath();

			ballX += (x - ballX) * 0.1;
			ballY += (y - ballY) * 0.1;

			ctx.arc(ballX, ballY, 90, 0, 2 * Math.PI);
			ctx.fillStyle = theme.palette.primary.colorSet.green;
			ctx.fill();
		}

		function loop() {
			ctx.clearRect(0, 0, width, height);
			drawBall();
			requestAnimationFrame(loop);
		}

		loop();

		function handleMouseMove(e) {
			x = e.pageX;
			y = e.pageY;
		}

		function handleResize() {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;

			window.addEventListener("resize", handleResize);
			window.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const cursor = theme => ({
		width: "100%",
		height: "100%",
		position: "fixed",
		top: 0,
		left: 0,
		zIndex: 999999,
		opacity: cursorControls.cursor.active ? 1 : 0,
		pointerEvents: "none",
		transition: "500ms ease",
		mixBlendMode: "exclusion",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	});

	return (
		<Box
			component='canvas'
			className='cursor-wrapper'
			id='scene'
			sx={cursor}
		></Box>
	);
}

export default Cursor;
