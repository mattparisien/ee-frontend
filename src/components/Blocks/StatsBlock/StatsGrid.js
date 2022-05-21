import React from "react";
import StatsGridItem from "./StatsGridItem";
import { useMediaQuery } from "@mui/material";

function StatsGrid({ items }) {

	const matches = useMediaQuery('(min-width:769px)');

	return (
		<div
			className={`StatsGrid grid w-full overflow-hidden`}
			style={{ gridTemplateColumns: `repeat(${matches ? items.length : 1}, 1fr)` }}
		>
			{items.map((item, i) => (
				<StatsGridItem
					heading={item.Heading}
					description={item.Line}
					key={i}
					index={i}
				/>
			))}
		</div>
	);
}

export default StatsGrid;
