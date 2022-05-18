import React, { useMemo } from "react";
import divideArray from "../../../../../helpers/divideArray";
import ProjectGridContainer from "./components/ProjectGridContainer";
import ProjectGridRow from "./components/ProjectGridRow";
import ProjectGridItem from "./components/ProjectGridItem";

function ProjectGrid({ items }) {
	const arrays = useMemo(() => {
		if (items) {
			const dividedArrays = divideArray([...items], 6);

			return dividedArrays;
		}
	}, [items]);

	const gridItems =
		items &&
		items.map((item, i) => (
			<ProjectGridRow key={i} index={i}>
				<ProjectGridItem
					imageRatio={i % 2 === 0 ? "landscape" : "portrait"}
					gridNumber={i + 1}
					{...item}
				/>
			</ProjectGridRow>
		));

	return <ProjectGridContainer>{gridItems}</ProjectGridContainer>;
}

export default ProjectGrid;
