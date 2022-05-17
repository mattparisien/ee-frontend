import React from "react";
import StatsGridItem from "./StatsGridItem";

function StatsGrid({ items }) {
	return (
		<div
			className={`StatsGrid grid md:grid-cols-${items.length} w-full overflow-hidden`}
		>
			{items.map((item, i) => (
				<StatsGridItem
					heading={item.heading}
					description={item.line}
					key={i}
					index={i}
				/>
			))}
		</div>
	);
}

export default StatsGrid;
