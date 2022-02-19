import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	position: relative;
	border-radius: 5px;
	padding: 0.6rem 1.9rem;
	height: auto;
	font-family: "Kobe";
	font-size: 1rem;
	margin: 0 auto;
	display: block;
	transition: 300ms ease;
	overflow: hidden;

	.button-circle {
		transition: 400ms ease;
		position: absolute;
		transform-origin: center;
		left: ${({ mousePos }) => (mousePos ? mousePos.x : "50%")};
		top: ${({ mousePos }) => (mousePos ? mousePos.y : "50%")};
		top: 50%;
		transform: translate(-50%, -50%) scale(0.3);
		z-index: 0;
		width: 10rem;
		height: 10rem;p
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.red};
	}

	.button-text {
		position: sticky;
		z-index: 1;
	}

	${({ variant, color, size, theme }) => {
		return variant === "outlined"
			? `
       border: 1px solid ${color ? theme.colors[color] : "dark"};
       background: transparent;
       color: ${color ? theme.colors[color] : "dark"};

       &:hover {
        background-color: ${theme.colors[color]};
        color: ${
					color
						? color === "dark"
							? theme.colors["light"]
							: theme.colors["dark"]
						: theme.colors["light"]
				};
       }


      `
			: `
       border: none;
       background-color: ${theme.colors[color]};
       color: ${theme.colors[color === "dark" ? "light" : "dark"]}

     

      `;
	}}
`;

function Button(props) {
	const [mousePos, setMousePos] = useState(null);
	const handleMouseMove = e => {
		setMousePos(() => ({
			x: e.clientX,
			y: e.clientY,
		}));
	};

	const handleMouseLeave = () => {
		setMousePos(null);
	};

	return (
		<StyledButton
			{...props}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			mousePos={mousePos}
		>
			<div className='button-text'>{props.children}</div>
			<div className='button-circle'></div>
		</StyledButton>
	);
}

export default Button;
