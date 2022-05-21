import React, { useContext } from "react";
import { GlobalContext } from "../../../lib/context";
import Block from "../../Blocks/Block";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";

function ProjectsPage() {
	const { appState } = useContext(GlobalContext);

	console.log(appState)

	return (
		<div className='ProjectsPage'>
			<Block
				options={null}
				component='TitleBlock'
				theme={"light"}
				data={{
					title: "Projects",
					options: null,
				}}
			/>
			<Section>
				<Container>
					{appState.projects && <ProjectGrid items={appState.projects} />}
				</Container>
			</Section>
		</div>
	);
}

export default ProjectsPage;
