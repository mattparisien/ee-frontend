import React from "react";
import SectionLayout from "../Containers/SectionLayout";
import { HomeInnerComponents } from "./Home/components";
import { pageSchema } from "./pageSchema";
import { ProjectsInnerComponents } from "./Projects";

const innerComponents = {
	HomeInnerComponents,
	ProjectsInnerComponents,
};

export function HomePage() {
	return (
		<>
			{pageSchema.home.sections.map(section => {
        console.clear()
				console.log(innerComponents.HomeInnerComponents[section.name.toUpperCase()]);
				return (
					<SectionLayout
						key={section.id}
						id={section.id}
						page={section.page}
						bg={section.backgroundColor}
						height={section.height}
						minHeight={section.minHeight}
						headerOffset={section.headerOffset}
					>
						{React.createElement(
							innerComponents.HomeInnerComponents[section.name],
							{
								key: section.id,
								height: section.height,
							}
						)}
					</SectionLayout>
				);
			})}
		</>
	);
}

export function ProjectPage() {
	return (
		<>
			{pageSchema.projects.sections.map(section => {
				console.log(innerComponents.ProjectsInnerComponents[section.name]);
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
