// import { ColorContext, CursorContext } from "../../App/App";
import { CircularProgress, Typography } from "@mui/material";
import classNames from "classnames";
import React, { useRef, useState } from "react";
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

	return items && items.length >= 1 ? (
		<div className={`c-grid c-grid_${variant}`}>
			
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
			
		</div>
	) : (
		<Typography variant='h4' component='p' pt={10} pb={10}>
			No projects were found
		</Typography>
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
				<Typography component="p" variant="h4" className='c-grid_title -underline'>{title}</Typography>
				<Typography component="p" variant="h4" className='c-grid_description -text-tiny'>{previewText}</Typography>
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
