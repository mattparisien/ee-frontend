import React from "react";
import { pages } from "../Home/Home";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import Hero from "./Hero";
import { Projects } from "..";

function ProjectPage() {
	const innerComponents = {
		hero: Hero,
		projects: Projects,
	};

	return (
		<>
			{pages.projects.sections.map(section => {
				console.log(innerComponents[section.name]);
				return (
					<Section
						key={section.id}
						id={section.id}
						page={section.page}
						noGutter={section.id === 1}
						bg={section.backgroundColor}
					>
						<ContainerFluid
							height={section.height}
							headerOffset={section.headerOffset}
						>
							{React.createElement(innerComponents[section.name], {
								key: section.id,
								height: section.height,
							})}
						</ContainerFluid>
					</Section>
				);
			})}
		</>
	);
}

export default ProjectPage;
