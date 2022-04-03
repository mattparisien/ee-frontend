import classNames from "classnames";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import Link from "../Link/Link";

function List(
	{ items, classes, variant, hoverEffect, onClick },
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
					onClick={onClick}
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
	onClick
}) {
	const [hovered, setHovered] = useState(null);


	return (
		items &&
		items.map((item, i) => {
			return (
				<li
				onClick={onClick}
					className={`c-list_item ${
						underline ? `-relative -underline -hover-underline` : ""
					}`}
					key={i}
					onMouseEnter={() => setHovered(i + 1)}
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
					{draw && <Highlight hoveredId={i + 1} hovered={hovered} />}
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
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 157.22 17.19'
				className='c-highlight_svg'
			>
				<path
					ref={highlight}
					d='M155.72 17.15c-.24-8.3-8.93-15.28-17.09-13.72-5.99 1.14-10.56 5.86-15.99 8.63s-13.72 2.49-15.81-3.23c-.73-2-.58-4.42-2.04-5.96-1.58-1.66-4.22-1.48-6.49-1.17C65.73 6.14 32.8 11.77.19 7.67'
					style={{
						fill: "none",

						strokeMiterlimit: 10,
						
					}}
				/>
			</svg>
		</div>
	);
}

function IconItems({ items }) {
	return items
		? items.map((item, i) => (
				<li className='c-list_iconItem' key={i}>
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
