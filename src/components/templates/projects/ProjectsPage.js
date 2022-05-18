import React, { useEffect } from "react";
import useGlobalStore from "../../../store/globalStore";
import Section from "../../Containers/Section";
import Container from "../../Containers/ContainerFluid";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";
import Block from "../../Blocks/Block";

function ProjectsPage() {
	const { projects, getProjects } = useGlobalStore(state => ({
		projects: state.projects,
		getProjects: state.getProjects,
	}));

	useEffect(() => {
		!projects[0] && getProjects();
	}, [projects]);
	return (
		<div className='ProjectsPage'>
			<Block
				options={null}
				name='TitleBlock'
				theme={"light"}
				data={{
					title: "Projects",
					options: null,
				}}
			/>
			<Section>
				<Container>
					<ProjectGrid items={projects} />
				</Container>
			</Section>
		</div>
	);
}

export default ProjectsPage;
