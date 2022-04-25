import React from "react";
import { useQuery } from "@apollo/client";
import { Box, CircularProgress, useTheme } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import { useEffect, useMemo, useState } from "react";
import PROJECTS from "../../../api/graphql/queries/GetProjects";
import Container from "../../Containers/ContainerFluid";
import Page from "../../Containers/Page";
import Section from "../../Containers/Section";
import ProjectGrid from "./ProjectGrid/ProjectGrid";
import Block from "../../Blocks/Block";
import useRandomColor from "../../../helpers/hooks/useRandomColor";

function ProjectsTemplate() {
	const [projects, setProjects] = useState([]);
	const { loading, error, data } = useQuery(PROJECTS);

	const theme = useTheme();
	const colors = useRandomColor(theme.palette.primary.colorSet, 10);

	gsap.registerPlugin(DrawSVGPlugin);

	// const colors = useMemo(() => {
	// 	if (theme) {
	// 		return useRandomColor(theme && theme.palette.primary.colorSet, 10);
	// 	}
	// }, [theme]);

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
				</Container>
			</Section>
		</>
	);
}

export default ProjectsTemplate;
