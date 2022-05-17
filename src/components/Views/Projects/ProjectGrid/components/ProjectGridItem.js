import React from "react";
import ProjectGridItemImage from "./ProjectGridItemImage";
import Link from "../../../../Link/Link";
import ProjectGridItemInfo from "./ProjectGridItemInfo";
import convertToSlug from "../../../../../helpers/convertToSlug";

function ProjectGridItem({ gridNumber, title, subtitle }) {
	const locations = {
		1: {
			column: "col-span-12 md:col-span-5",
			row: "",
		},
		2: {
			column: "col-span-12 md:col-start-9 col-end-13",
			row: "row-start-2",
		},
		3: {
			column: "col-span-12 md:col-span-5",
			row: "row-start-3 ",
		},
		4: {
			column: "col-span-12 md:col-start-7 col-end-13",
			row: "row-start-4",
		},
		5: {
			column: "",
			row: "",
		},
	};

	const heights = {
		1: "25vw",
		2: "10vw",
		3: "25vw",
		4: "50vw",
		5: "50vw",
	};

	console.log(gridNumber);

	return (
		<div
			className={`ProjectGridItem flex flex-col w-full h-full ${locations[gridNumber].column} ${locations[gridNumber].row}`}
		>
			<Link isRouterLink href={`/${convertToSlug(subtitle)}`}>
				<ProjectGridItemImage height={heights[gridNumber]} />
				<ProjectGridItemInfo title={title} subtitle={subtitle} />
			</Link>
		</div>
	);
}

export default ProjectGridItem;
