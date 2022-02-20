import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	${({ style }) => {
		return style && style;
	}}

	position: relative;
	border-radius: 5px;
	padding: 0.6rem 1.9rem;
	height: auto;
	font-family: "Kobe";
	font-size: 1rem;
	margin: 1rem auto;
	display: block;
	transition: 300ms ease;
	overflow: hidden;
	width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

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
			type={props.type ? props.type : "button"}
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
