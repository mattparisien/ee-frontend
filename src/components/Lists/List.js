import React, { useEffect, useRef, useState, forwardRef } from "react";
import Link from "../Link/Link";
import Fade from "react-reveal/Fade";
import classNames from "classnames";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import gsap from "gsap";

function List(
	{ items, color, toggleTransitioning, classes, variant, hoverEffect },
	ref
) {
	const listClasses = classNames("c-list", {
		[classes]: classes,
	});

	return (
		<ul className={listClasses} ref={ref}>
			{variant !== "icon" ? (
				<TextItems
					items={items}
					isRouterLink
					underline={hoverEffect === "underline"}
					draw={hoverEffect === "draw"}
				/>
			) : (
				<IconItems items={items && items} />
			)}
		</ul>
	);
}

function TextItems({
	items,
	toggleTransitioning,
	isRouterLink,
	underline,
	draw,
}) {
	const [hovered, setHovered] = useState(null);
	return (
		items &&
		items.map((item, i) => {
			return (
				<li
					className={`c-list_item ${
						underline ? `-relative -underline -hover-underline` : ""
					}`}
					key={i}
					onMouseEnter={() => setHovered(i)}
					onMouseLeave={() => setHovered(false)}
				>
					<Link
						isRouterLink={isRouterLink}
						href={item.path}
						onClick={toggleTransitioning}
						toggleTransitioning={toggleTransitioning}
					>
						{item.name}
					</Link>
					{draw && <Highlight hoveredId={i} hovered={hovered} />}
				</li>
			);
		})
	);
}

function Highlight({ hoveredId, hovered }) {
	gsap.registerPlugin(DrawSVGPlugin);
	const highlight = useRef(null);

	useEffect(() => {
		hovered === null && gsap.set(highlight.current, { drawSVG: 0 });

		if (hovered && hoveredId === hovered) {
			gsap.to(highlight.current, {
				drawSVG: "100%",
				duration: 1,
				ease: "power3.out",
			});
		} else {
			gsap.to(highlight.current, {
				drawSVG: "0",
				duration: 1,
				ease: "power3.out",
			});
		}
	}, [hovered, hoveredId]);

	return (
		<div className='c-highlight'>
			<svg
				viewBox='0 0 80 54'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='c-highlight_svg'
				preserveAspectRatio='none'
			>
				<path
					d='M4.734 19.171c6 24 54.205 30.296 69.5 15 17.499-17.5-58-31.5-72.5-3.5'
					ref={highlight}
				></path>
			</svg>
		</div>
	);
}

function IconItems({ items }) {
	return items
		? items.map(item => (
				<li className='c-list_iconItem'>
					<a href={item.url} target='_blank' rel='noreferrer'>
						{React.createElement(item.component, {
							key: item.id,
							className: "c-list_icon",
						})}
					</a>
				</li>
		  ))
		: null;
}

export default forwardRef(List);
