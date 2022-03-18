import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import { ColorContext, CursorContext } from "../../App/App";
import { useMediaQuery } from "@mui/material";
import Link from "../../Link/Link";
import Frame from "../../Vector/Frame";
import { CircularProgress } from "@mui/material";

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
	src,

	previewText,
	title,
	url,
}) {
	const ref = useRef(null);
	const [inViewRef, inView] = useInView({ threshold: 0.5 });
	const [loaded, setLoaded] = useState(false);

	const setRefs = useCallback(
		node => {
			// Ref's from useRef needs to have the node assigned to `current`
			ref.current = node;
			// Callback refs, like the one from `useInView`, is a function that takes the node as an argument
			inViewRef(node);
		},
		[inViewRef]
	);

	const itemClasses = classNames("c-grid_item -relative", {
		"is-in-view": inView,
	});

	return (
		<Link
			classes={itemClasses}
			href={url}
			target='_blank'
			rel='noreferrer'
			ref={setRefs}
			isRouterLink
		>
			{!loaded && (
				<div className='c-grid_item_loader'>
					<CircularProgress color='inherit' />
				</div>
			)}
			<div className='c-grid_img-wrapper'>
				<img
					src={src}
					alt={Math.random()}
					className='c-grid_img'
					onLoad={() => setLoaded(true)}
				/>
			</div>
			{/* <Frame/> */}
			<div className='c-grid_info'>
				<h3 className='c-grid_title'>{title}</h3>
				<p className='c-grid_description -text-tiny'>{previewText}</p>
			</div>
		</Link>
	);
}

export default ProjectGrid;
