import React from "react";
import ProjectsPage from "../components/templates/projects/ProjectsPage";
import Seo from "../components/Seo/Seo";

function projects() {
	return (
		<>
			<Seo
				title='Projects - The Eyes and Ears Agency'
				description='The Eyes and Ears Agency builds a bridge between the music industry and impactful non-profit organizations.'
			/>
			<ProjectsPage />
		</>
	);
}

export default projects;
