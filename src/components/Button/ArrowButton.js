import React, {useRef} from "react";
import classNames from "classnames";


function ArrowButton({ handleClick, rotation, classes, color }) {
	const buttonClasses = classNames("c-arrow-button", { [classes]: classes, [`is-${color}`]: color });

	return (
		<button className={buttonClasses} onClick={handleClick}>
			<Arrow rotation={rotation} color={color}/>
		</button>
	);
}

function Arrow({rotation, color}) {
	const svg = useRef(null);

	return (
		<svg
			ref={svg}
			className='c-arrow-svg'
			viewBox='0 0 100 101'
			fill='none'
			width='100%'
			height='100%'
			xmlns='http://www.w3.org/2000/svg'
			style={{
				opacity: 1,
				visibility: "inherit",
				transform: `rotate(${rotation ? `${rotation}deg` : 0})`,
			}}
		>
			{" "}
			<path d='M42.84 45.3408C42.0133 47.0475 41.24 48.3275 40.52 49.1808L63.84 49.1808V50.8608L40.52 50.8608C41.24 51.7142 42.0133 52.9942 42.84 54.7008H41.44C39.76 52.7542 38 51.3142 36.16 50.3808L36.16 49.6608C38 48.7542 39.76 47.3142 41.44 45.3408L42.84 45.3408Z'></path>{" "}
			<path
				d='M42.84 45.3408C42.0133 47.0475 41.24 48.3275 40.52 49.1808L63.84 49.1808V50.8608L40.52 50.8608C41.24 51.7142 42.0133 52.9942 42.84 54.7008H41.44C39.76 52.7542 38 51.3142 36.16 50.3808L36.16 49.6608C38 48.7542 39.76 47.3142 41.44 45.3408L42.84 45.3408Z'
				className='c-arrow-svg_arrow'
			></path>{" "}
			<circle
				opacity='0.2'
				cx='50'
				cy='50.3408'
				r='49'
				transform='rotate(-180 50 50.3408)'
			></circle>{" "}
			<circle cx='50' cy='50.3408' r='49'></circle>{" "}
		</svg>
	);
}

export default ArrowButton;
