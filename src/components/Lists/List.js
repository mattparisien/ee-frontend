import React, { useEffect } from "react";
import Link from "../Link/Link";
import Fade from "react-reveal/Fade";

function List({ items, color, toggleTransitioning }) {
	return (
		<ul className={`c-list`}>
			<Fade bottom cascade>
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
			</Fade>
		</ul>
	);
}

export default List;
