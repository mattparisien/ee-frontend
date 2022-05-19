import React, { useEffect } from "react";
import useGlobalStore from "../../../store/globalStore";
import Section from "../../Containers/Section";
import Container from "../../Containers/ContainerFluid";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";
import Block from "../../Blocks/Block";

function ProjectsPage() {
	const { projects } = useGlobalStore(state => ({
		projects: state.projects,
	}));

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
				<Container>{projects[0] && <ProjectGrid items={projects} />}</Container>
			</Section>
		</div>
	);
}

export default ProjectsPage;
