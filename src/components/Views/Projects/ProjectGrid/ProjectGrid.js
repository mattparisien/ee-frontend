import React, { useMemo } from "react";
import divideArray from "../../../../helpers/divideArray";
import ProjectGridContainer from "./components/ProjectGridContainer";
import ProjectGridItem from "./components/ProjectGridItem";

function ProjectGrid({ items, colors }) {
	const arrays = useMemo(() => {
		if (items) {
			const dividedArrays = divideArray([...items], 6);

			return dividedArrays;
		}
	}, [items]);

	const gridItems = items.map((item, i) => (
		<ProjectGridItem key={i} gridNumber={i + 1} {...item} />
	));

	return <ProjectGridContainer>{gridItems}</ProjectGridContainer>;
}

export default ProjectGrid;
