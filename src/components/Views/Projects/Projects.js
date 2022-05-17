import { Box, useTheme } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext, GlobalContext } from "../../../context/Context";
import useRandomColor from "../../../helpers/hooks/useRandomColor";
import Block from "../../Blocks/Block";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ProjectGrid from "./ProjectGrid/ProjectGrid";

function Projects() {
	const { setLoading } = useContext(GlobalContext);
	const { projects } = useContext(DataContext);
	const theme = useTheme();
	const colors = useRandomColor(theme.palette.primary.colorSet, 10);

	useEffect(() => {
		projects[0] && setLoading(false);

		return () => setLoading(true);
	}, [projects]);

	return (
		<>
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
				<Container disableMaxWidth>
					{projects && (
						<ProjectGrid
							variant='projects'
							items={projects}
							hoverEffect={"frame"}
							colors={colors}
						/>
					)}
				</Container>
			</Section>
		</>
	);
}

export default Projects;
