import React, { useContext, useEffect } from "react";
import Seo from "../components/Seo/Seo";
import ProjectsPage from "../components/templates/projects/ProjectsPage";
import { GlobalContext } from "../lib/context";
import { getProjects } from "../lib/getProjects";

function projects({ projects, seo }) {
	const { setAppState } = useContext(GlobalContext);

	useEffect(() => {
		projects &&
			setAppState(state => ({ ...state, projects: [...projects[0]] }));
	}, [projects]);

	return (
		<>
			{seo && <Seo {...seo} />}
			<ProjectsPage />
		</>
	);
}

export default projects;

export async function getStaticProps() {
	const projects = await getProjects();

	return {
		props: {
			...projects,
		},
	};
}
