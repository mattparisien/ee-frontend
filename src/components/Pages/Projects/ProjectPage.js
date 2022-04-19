import { Typography } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import { useContext, useEffect, useMemo, useState } from "react";
import { DataContext, SearchContext } from "../../../context/Context";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import ProjectGrid2 from "./ProjectGrid/ProjectGrid2";
import variables from "../../../styles/scss/_vars.module.scss";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import PROJECTS from "../../../api/graphql/queries/GetProjects";

export default function ProjectPage({ pageHeading }) {


	const [projects, setProjects] = useState([]);
	const { loading, error, data } = useQuery(PROJECTS);
	const { search } = useContext(SearchContext);

	gsap.registerPlugin(DrawSVGPlugin);

	

	const colors = useMemo(() => {
		const colorArray = [];

		if (variables) {
			for (let key in variables) {
				if (key.includes("colors")) {
					colorArray.push(variables[key]);
				}
			}
		}

		return [...colorArray, ...colorArray].slice(0, 6);
	}, [variables]);

	useEffect(() => {
		if (data && !loading) {
			console.log('the data', data)
			// setProjects(prevProjects => ([...prevProjects, {

			// }]))
		}
	}, [data, loading])

	return (
		<div className='o-page o-page_project'>
			<Section classes='-padding-top-lg -relative' noGutter>
				<Container
					sx={{
						".o-colorBlobs": {
							height: "500%",
						},
					}}
				>
					<Typography variant='h1' component='h1' textAlign='center'>
						Projects
					</Typography>
					{/* <ColorBlobs height="200%"/> */}
				</Container>
			</Section>
			<Section classes='-padding-bottom-lg -relative'>
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
					{data && (
						<ProjectGrid2
							variant='projects'
							items={data.projects.data}
							hoverEffect={"frame"}
							colors={colors}
						/>
					)}
				</Container>
			</Section>
		</div>
	);
}
