import React from "react";
import { StyledAccent } from "./styles";

function AccentLine() {
	return (
		<svg
			className='accent-line'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 357 5'
		>
			<line class='accent-line__line' y1='2.5' x2='357' y2='2.5' />
		</svg>
	);
}

function AccentRectangle() {
	return (
		<svg
			className='accent-rectangle'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 398.91 160.23'
		>
			<path
				class='accent-rectangle__path'
				d='M147.37-601.33l-389.43,20.91-6.84-127.32M144.24-738v127.5m-390-115h390'
				transform='translate(251.4 738.02)'
			/>
		</svg>
	);
}

function AccentCircle() {
	return (
		<svg
			className='accent-circle'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 412.09 132.62'
		>
			<ellipse
				class='accent-circle__circle'
				cx='206.05'
				cy='66.31'
				rx='203.55'
				ry='63.81'
			/>
		</svg>
	);
}

function Accent(props) {
	const { type } = props;
	return (
		<StyledAccent className='accent'>
			<div className='accent__inner'>
				{props.children}
				{type === "line" && <AccentLine />}
				{type === "rectangle" && <AccentRectangle />}
				{type === "circle" && <AccentCircle />}
			</div>
		</StyledAccent>
	);
}

export default Accent;
