import React from "react";
import ProjectGridItemImage from "./ProjectGridItemImage";
import Link from "../../../../Link/Link";
import ProjectGridItemInfo from "./ProjectGridItemInfo";
import convertToSlug from "../../../../../helpers/convertToSlug";
import "./ProjectGridItem.css";

function ProjectGridItem({ gridNumber, title, subtitle, featureImage }) {
	console.log(featureImage);

	const locations = {
		1: {
			column: "col-span-12 md:col-span-5",
			row: "",
			translate: "translate-y-0",
		},
		2: {
			column: "col-span-12 md:col-start-9 col-end-13",
			row: "row-start-2",
			translate: "md:-translate-y-[25%]",
		},
		3: {
			column: "col-span-12 md:col-span-5",
			row: "row-start-3 ",
			translate: "md:-translate-y-[60%]",
		},
		4: {
			column: "col-span-12 md:col-start-7 col-end-13",
			row: "row-start-4",
			translate: "md:-translate-y-[45%]",
		},
		5: {
			column: "",
			row: "",
		},
	};

	return (
		<div
			className={`ProjectGridItem ProjectGridItem_${gridNumber} flex flex-col w-full h-full ${locations[gridNumber].column} ${locations[gridNumber].row} ${locations[gridNumber].translate}`}
		>
			<Link isRouterLink href={`/${convertToSlug(subtitle)}`}>
				<ProjectGridItemImage
					gridNumber={gridNumber}
					image={{ ...featureImage.data.attributes }}
				/>
				<ProjectGridItemInfo title={title} subtitle={subtitle} />
			</Link>
		</div>
	);
}

export default ProjectGridItem;
