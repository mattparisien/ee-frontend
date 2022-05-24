import React from "react";

function QuoteSvg(props) {
	return (
		<svg
			className='QuoteSvg'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 21.55 17.14'
			{...props}
			style={{
				position: "absolute",
				left: "4vw",
				top: "-2.5vw",
				transform: props.type !== "left" && `rotate(180deg)`,
				width: "10vw",
				opacity: 0.2,
			}}
		>
			<path
				d='M5.26 17.14C1.69 17.14 0 14.41 0 11.05 0 6.62 3.05 1.05 8.31 0l.1.42C4 1.37 2 5.05 2 9.46c.63-1.04 1.89-1.78 3.26-1.78 2.63 0 4.73 2.1 4.73 4.72s-2.11 4.73-4.73 4.73Zm11.56 0c-3.57 0-5.26-2.73-5.26-6.09 0-4.43 3.05-10 8.31-11.05l.1.42c-4.42.95-6.41 4.63-6.41 9.04.63-1.04 1.89-1.78 3.26-1.78 2.63 0 4.73 2.1 4.73 4.72s-2.11 4.73-4.73 4.73Z'
				style={{
					fill: "#231f20",
				}}
			/>
		</svg>
	);
}

export default QuoteSvg;
