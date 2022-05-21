import axios from "axios";
import React, { useContext, useEffect } from "react";
import Seo from "../components/Seo/Seo";
import ProjectsPage from "../components/templates/projects/ProjectsPage";
import { GlobalContext } from "../lib/context";
import { getProjects } from "../lib/getProjects";

function projects({ projects, seo }) {
	const { setAppState } = useContext(GlobalContext);

	console.log('the seo', seo)

	useEffect(() => {
		projects &&
			setAppState(state => ({ ...state, projects: [...projects[0]] }));
	}, [projects]);

	useEffect(() => {
		const test = async () => {
			const post = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/projects?filters[Subtitle][$eq]=Intersectional%20Environmentalist`
			);
		};
		test();
	}, []);

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
