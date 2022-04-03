// import { ColorContext, CursorContext } from "../../App/App";
import { CircularProgress } from "@mui/material";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import Link from "../../Link/Link";
import Frame from "../../Vector/Frame";

function ProjectGrid({ items, variant, hoverEffect }) {
	const gridItems = useRef([]);
	gridItems.current = [];

	const addToRefs = el => {
		if (el && !gridItems.current.includes(el)) {
			gridItems.current.push(el);
		}
	};

	const scrollSpeeds = [8, 1, 6, 3];

	return (
		<div className={`c-grid c-grid_${variant}`}>
			<Fade bottom>
				{items &&
					items.map((item, i) => {
						return variant !== "media" ? (
							<ProjectItem
								addToRefs={addToRefs}
								key={i}
								// onMouseEnter={handleMouseEnter}
								// onMouseLeave={handleMouseLeave}
								src={item.media.featureImage.url}
								alt={item.media.featureImage.altText}
								previewText={item.subtitle}
								title={item.title}
								hoverEffect={hoverEffect}
								url={`/projects/${item.id}`}
								scrollSpeed={scrollSpeeds[i]}
							/>
						) : (
							<MediaItem src={item.attributes.url} />
						);
					})}
			</Fade>
		</div>
	);
}

function ProjectItem({
	src,
	addToRefs,
	previewText,
	title,
	url,

	hoverEffect,
}) {
	const [loaded, setLoaded] = useState(false);
	const inViewport = useRef(false);

	const itemClasses = classNames("c-grid_item -relative -hover-underline", {
		"is-in-view": inViewport.current,
		"-hover-frame": hoverEffect === "frame",
	});

	return (
		<Link
			classes={itemClasses}
			href={url}
			target='_blank'
			rel='noreferrer'
			isRouterLink
			ref={addToRefs}
		>
			{/* <Frame /> */}
			{!loaded && (
				<div className='c-grid_item_loader'>
					<CircularProgress color='inherit' />
				</div>
			)}

			<div className='c-grid_img-wrapper'>
				<div className='image'>
					<img
						src={src}
						alt={Math.random()}
						className='c-grid_img'
						onLoad={() => setLoaded(true)}
					/>
				</div>
			</div>

			<div className='c-grid_info'>
				<h3 className='c-grid_title -underline'>{title}</h3>
				<p className='c-grid_description -text-tiny'>{previewText}</p>
			</div>

			<Frame />
		</Link>
	);
}

function MediaItem({ src, alt }) {
	const [loaded, setLoaded] = useState(false);

	const itemClasses = classNames("c-grid_item -relative -hover-underline");

	return (
		<div className={itemClasses}>
			{!loaded && (
				<div className='c-grid_item_loader'>
					<CircularProgress color='inherit' />
				</div>
			)}

			<div className='c-grid_img-wrapper'>
				<div className='image'>
					<img
						src={src}
						alt={Math.random()}
						className='c-grid_img'
						onLoad={() => setLoaded(true)}
					/>
				</div>
			</div>
		</div>
	);
}

export default ProjectGrid;
