import { useQuery } from "@apollo/client";
import { Box, CircularProgress, Typography } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import { useContext, useEffect, useMemo, useState } from "react";
import PROJECTS from "../../../api/graphql/queries/GetProjects";
import { SearchContext } from "../../../context/Context";
import variables from "../../../styles/scss/_vars.module.scss";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ProjectGrid from "./ProjectGrid/ProjectGrid";
import Page from "../../Containers/Page";
import { useTheme } from "@mui/material";

export default function ProjectPage({ pageHeading, location }) {
	const [projects, setProjects] = useState([]);
	const { loading, error, data } = useQuery(PROJECTS);
	const { search } = useContext(SearchContext);
	const theme = useTheme();

	gsap.registerPlugin(DrawSVGPlugin);

	const colors = useMemo(() => {
		const colorArray = [];

		if (theme) {
			for (let key in theme.palette.primary.colorSet) {
				colorArray.push(theme.palette.primary.colorSet[key]);
			}
		}

		return [...colorArray, ...colorArray].slice(0, 6);
	}, [theme]);

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
		<Page name='projects' location={location}>
			<Section >
				<Container maxWidth='0'>
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
		</Page>
	);
}
