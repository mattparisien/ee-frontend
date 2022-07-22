import React, { useContext } from "react";
import { GlobalContext } from "../../../lib/context";
import Block from "../../Blocks/Block";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";

function ProjectsPage() {
	const { appState } = useContext(GlobalContext);

	return (
		<div className='ProjectsPage first-child:pt-16 first-child:mt-0'>
			<Block
				options={null}
				component='TitleBlock'
				theme={"light"}
				data={{
					Title: "Projects",
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
