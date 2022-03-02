import React from "react";
import { pages } from "../Home/Home";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import Hero from "./Hero";
import { Projects } from "..";
import SectionLayout from "../../Containers/SectionLayout";

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
					<SectionLayout
						key={section.id}
						id={section.id}
						page={section.page}
						bg={section.backgroundColor}
					>
						{React.createElement(innerComponents[section.name], {
							key: section.id,
							height: section.height,
						})}
					</SectionLayout>
				);
			})}
		</>
	);
}

export default ProjectPage;
