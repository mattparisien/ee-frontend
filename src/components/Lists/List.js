import React, { useEffect } from "react";
import Link from "../Link/Link";

function List({ items, color, toggleTransitioning }) {


	return (
		<ul className={`c-list -text-${color}`}>
			{items &&
				items.map((item, i) => {
					return (
						<li className='c-list_item' key={i}>
							<Link
								isRouterLink
								href={item.path}
								onClick={toggleTransitioning}
								toggleTransitioning={toggleTransitioning}
							>
								{item.name}
							</Link>
						</li>
					);
				})}
		</ul>
	);
}

export default List;
