import React, { useState } from "react";
import Seo from "../components/Seo/Seo";
import ProjectsPage from "../components/templates/projects/ProjectsPage";
import { getProjects } from "../lib/getProjects";

function projects({ projects, seo }) {
	return (
		<>
			<Seo
				title={seo.Title}
				description={seo.Description}
				viewport={seo.MetaViewport}
				canonical={seo.CanonicalUrl}
			/>
			<ProjectsPage />
		</>
	);
}

export async function getStaticProps() {
	const projects = await getProjects();

	console.log("the projects", projects);

	return {
		props: {
			...projects,
		},
	};
}

export default projects;
