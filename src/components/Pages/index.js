import { pageSchema } from "./pageSchema";
import SectionLayout from "../Containers/SectionLayout";
import { HomeInnerComponents } from "./Home/components";
import { ProjectsInnerComponents } from "./Projects";
import React from "react";

const innerComponents = {
	HomeInnerComponents,
	ProjectsInnerComponents,
};

export function HomePage() {
  console.log(innerComponents)
	return (
		<>
			{pageSchema.home.sections.map(section => {
        console.log(section.name)
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
							innerComponents.HomeInnerComponents[section.name.toUpperCase()],
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
