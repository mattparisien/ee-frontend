import React, { useEffect } from "react";
import Link from "../Link/Link";
import Fade from "react-reveal/Fade";
import classNames from "classnames";

function List({
	items,
	color,
	toggleTransitioning,
	classes,
	variant,
	hoverEffect,
}) {
	const listClasses = classNames("c-list", {
		[classes]: classes,
	});



	return (
		<ul className={listClasses}>
			{variant !== "icon" ? (
				<TextItems
					items={items}
					isRouterLink
					underline={hoverEffect === "underline"}
				/>
			) : (
				<IconItems items={items && items} />
			)}
		</ul>
	);
}

function TextItems({ items, toggleTransitioning, isRouterLink, underline }) {
	return (
		items &&
		items.map((item, i) => {
			return (
				<li
					className={`c-list_item ${
						underline ? `-relative -underline -hover-underline` : ""
					}`}
					key={i}
				>
					<Link
						isRouterLink={isRouterLink}
						href={item.path}
						onClick={toggleTransitioning}
						toggleTransitioning={toggleTransitioning}
					>
						{item.name}
					</Link>
				</li>
			);
		})
	);
}

function IconItems({ items }) {
	console.log(items);
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

export default List;
