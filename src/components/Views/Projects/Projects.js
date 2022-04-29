import { useQuery } from "@apollo/client";
import { Box, CircularProgress, useTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import PROJECTS from "../../../api/graphql/queries/GetProjects";
import useRandomColor from "../../../helpers/hooks/useRandomColor";
import Block from "../../Blocks/Block";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
// import { ViewContext } from "../../Containers/View";
import ProjectGrid from "./ProjectGrid/ProjectGrid";

function Projects() {
	// const { setTemplateLoaded } = useContext(ViewContext);
	const [projects, setProjects] = useState([]);
	const { loading, error, data } = useQuery(PROJECTS);

	const theme = useTheme();
	const colors = useRandomColor(theme.palette.primary.colorSet, 10);

	useEffect(() => {
		if (data && !loading) {
			setProjects(() =>
				[...data.projects.data]
					.sort((a, b) => a.attributes.Date - b.attributes.Date)
					.map(project => ({
						id: project.id,
						title: project.attributes.Title,
						subtitle: project.attributes.Subtitle,
						image: {
							url: project.attributes.FeatureImage.data.attributes.url,
							alt: project.attributes.FeatureImage.data.attributes
								.alternativeText,
						},
					}))
			);

			// setTemplateLoaded();
		}
	}, [data, loading]);

	return (
		<>
			<Block
				options={null}
				name='TitleBlock'
				theme={"light"}
				data={{
					Title: "Projects",
					options: null,
				}}
			/>
			<Section>
				<Container disableMaxWidth>
					<Box
						sx={theme => ({
							[theme.breakpoints.up("sm")]: {
								paddingBottom: theme.spacing(3),
							},
						})}
					>
						{loading && (
							<Box
								sx={{
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "100vh",
									position: "fixed",
									top: 0,
									left: 0,
									zIndex: 999,
								}}
							>
								<CircularProgress />
							</Box>
						)}
						{projects && (
							<ProjectGrid
								variant='projects'
								items={projects}
								hoverEffect={"frame"}
								colors={colors}
							/>
						)}
					</Box>
				</Container>
			</Section>
		</>
	);
}

export default Projects;
