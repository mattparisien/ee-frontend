import classNames from "classnames";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
// import { ColorContext, CursorContext } from "../../App/App";
import { useMediaQuery } from "@mui/material";
import Link from "../../Link/Link";

function ProjectGrid({ items }) {
	// const { setPageTheme } = useContext(ColorContext);
	// const { setCursorState } = useContext(CursorContext);
	const tablet = useMediaQuery("(max-width: 768px)");

	const themes = [
		"strawberry",
		"dark",
		"sunny",
		"blue",
		"fancy",
		"orangeCrush",
	];

	// const getRandomIndex = () => {
	// 	return Math.ceil(Math.random() * (themes.length - 0 + 1) - 1);
	// };

	// const handleMouseEnter = () => {
	// 	if (!tablet) {
	// 		setPageTheme(themes[getRandomIndex()]);
	// 		setCursorState("hovering");
	// 	}
	// };

	// const handleMouseLeave = () => {
	// 	if (!tablet) {
	// 		setPageTheme("regular");
	// 		setCursorState("following");
	// 	}
	// };

	useEffect(() => {}, [items]);

	return (
		<div className='c-grid'>
			{items &&
				items.map((item, i) => {
					return (
						<Item
							key={i}
							// onMouseEnter={handleMouseEnter}
							// onMouseLeave={handleMouseLeave}
							src={item.media.featureImage.url}
							alt={item.media.featureImage.altText}
							previewText={item.subtitle}
							title={item.title}
							url={`/projects/${item.id}`}
						/>
					);
				})}
		</div>
	);
}

function Item({
	// onMouseEnter,
	// onMouseLeave,
	src,
	alt,
	previewText,
	title,
	url,
}) {
	const ref = useRef(null);
	const [inViewRef, inView] = useInView({ threshold: 0.5 });

	const setRefs = useCallback(
		node => {
			// Ref's from useRef needs to have the node assigned to `current`
			ref.current = node;
			// Callback refs, like the one from `useInView`, is a function that takes the node as an argument
			inViewRef(node);
		},
		[inViewRef]
	);

	const itemClasses = classNames("c-grid_item", { "is-in-view": inView });

	return (
		<Link
			classes={itemClasses}
			// onMouseEnter={onMouseEnter}
			// onMouseLeave={onMouseLeave}
			href={url}
			target='_blank'
			rel='noreferrer'
			ref={setRefs}
			isRouterLink
		>
			<div className='c-grid_img-wrapper'>
				<img src={src} alt={Math.random()} className='c-grid_img' />
			</div>
			<div className='c-grid_info'>
				<h3 className='c-grid_title'>{title}</h3>
				<p className='c-grid_description -text-tiny'>{previewText}</p>
			</div>
		</Link>
	);
}

export default ProjectGrid;
