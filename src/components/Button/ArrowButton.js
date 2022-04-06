import React, { useRef, forwardRef, useEffect } from "react";
import classNames from "classnames";
import Link from "../Link/Link";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import $ from "jquery";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/src/DrawSVGPlugin";

function ArrowButton(
	{ handleClick, rotation, classes, color, isRouterLink, href },
	ref
) {
	const buttonClasses = classNames("c-arrow-button", {
		[classes]: classes,
		[`is-${color}`]: color,
	});

	gsap.registerPlugin(DrawSVGPlugin);

	const circle = useRef(null);

	const location = useMouseMove();
	const tl = useRef(gsap.timeline());

	const handleMouseEnter = e => {
		const circle = $(e.target).find(".hoverCircle");
		const arrow2 = $(e.target).find(".arrow2");

		tl.current
			.to(circle, 1, {
				drawSVG: "100%",
				duration: 1,
				ease: "expo.inOut",
			})
			.to(
				arrow2,
				{
					x: "-20px",
					duration: 1,
					ease: "power3.out",
					fill: "black",
				},
				0
			);
	};

	const handleMouseLeave = e => {
		
		const arrow2 = $(e.target).find(".arrow2");

		tl.current
			.to(circle, 1, {
				drawSVG: "0%",
				duration: 1,
				ease: "expo.inOut",
			})
			.to(
				arrow2,
				{
					x: "0px",
					duration: 1,
					ease: "power3.out",
					fill: "grey",
				},
				0
			);
	};

	return !isRouterLink ? (
		<button
			className={buttonClasses}
			onClick={handleClick}
			ref={ref}
			
		>
			<Arrow rotation={rotation} color={color} location={location} r />
			<div className='circle'></div>
		</button>
	) : (
		<Link
			isRouterLink={true}
			classes={buttonClasses}
			href={href}
			onClick={handleClick}
		>
			<Arrow rotation={rotation} color={color} />
		</Link>
	);
}

function Arrow({ rotation, color, location }) {
	const svg = useRef(null);
	const circle = useRef(null);
	gsap.registerPlugin(DrawSVGPlugin);
	useEffect(() => {
		gsap.set(circle.current, {
			drawSVG: 0,
		});
	}, []);

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
			<path
				d='M42.84 45.3408C42.0133 47.0475 41.24 48.3275 40.52 49.1808L63.84 49.1808V50.8608L40.52 50.8608C41.24 51.7142 42.0133 52.9942 42.84 54.7008H41.44C39.76 52.7542 38 51.3142 36.16 50.3808L36.16 49.6608C38 48.7542 39.76 47.3142 41.44 45.3408L42.84 45.3408Z'
				className='arrow1'
			></path>{" "}
			<path
				d='M42.84 45.3408C42.0133 47.0475 41.24 48.3275 40.52 49.1808L63.84 49.1808V50.8608L40.52 50.8608C41.24 51.7142 42.0133 52.9942 42.84 54.7008H41.44C39.76 52.7542 38 51.3142 36.16 50.3808L36.16 49.6608C38 48.7542 39.76 47.3142 41.44 45.3408L42.84 45.3408Z'
				className='arrow2'
			></path>{" "}
			<circle
				cx='50'
				cy='50.3408'
				r='49'
				transform='rotate(-180 50 50.3408)'
			></circle>
			<circle
				cx='50'
				cy='50.3408'
				r='49'
				transform='rotate(-180 50 50.3408)'
				ref={circle}
				className='hoverCircle'
			></circle>
		</svg>
	);
}

export default forwardRef(ArrowButton);
