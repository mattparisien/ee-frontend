// import { ColorContext, CursorContext } from "../../App/App";
import { CircularProgress, useMediaQuery } from "@mui/material";
import classNames from "classnames";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import Link from "../../Link/Link";

function ProjectGrid({ items }) {
	// const { setPageTheme } = useContext(ColorContext);
	// const { setCursorState } = useContext(CursorContext);
	const tablet = useMediaQuery("(max-width: 768px)");

	const gridItems = useRef([]);
	gridItems.current = [];

	useEffect(() => {
		if (gridItems.current) {
			const handleIntersect = entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !$(entry.target).hasClass("is-in-view")) {
						$(entry.target).addClass("is-in-view");
					}
				});
			};

			const observer = new IntersectionObserver(handleIntersect);

			gridItems.current.forEach(item => observer.observe(item));
		}
	}, [gridItems.current]);

	const addToRefs = el => {
		if (el && !gridItems.current.includes(el)) {
			gridItems.current.push(el);
		}
	};

	const scrollSpeeds = [8, 1, 6, 3];

	return (
		<div className='c-grid'>
			{items &&
				items.map((item, i) => {
					return (
						<Item
							addToRefs={addToRefs}
							key={i}
							// onMouseEnter={handleMouseEnter}
							// onMouseLeave={handleMouseLeave}
							src={item.media.featureImage.url}
							alt={item.media.featureImage.altText}
							previewText={item.subtitle}
							title={item.title}
							url={`/projects/${item.id}`}
							scrollSpeed={scrollSpeeds[i]}
						/>
					);
				})}
		</div>
	);
}

function Item({ src, addToRefs, previewText, title, url, scrollSpeed }) {
	const ref = useRef(null);

	const [loaded, setLoaded] = useState(false);
	const inViewport = useRef(false);

	const item = useRef(null);

	const itemClasses = classNames("c-grid_item -relative", {
		"is-in-view": inViewport.current,
	});

	return (
		<Link
			classes={itemClasses}
			href={url}
			target='_blank'
			rel='noreferrer'
			isRouterLink
			ref={addToRefs}
			data-scroll-speed={scrollSpeed}
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
