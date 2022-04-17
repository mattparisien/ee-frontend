import { Typography } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import { useContext, useMemo } from "react";
import { DataContext, SearchContext } from "../../../context/Context";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import ProjectGrid2 from "./ProjectGrid2";
import variables from "../../../styles/scss/_vars.module.scss";

export default function ProjectPage({ pageHeading }) {
	gsap.registerPlugin(DrawSVGPlugin);
	const data = useContext(DataContext);
	const { search } = useContext(SearchContext);

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

	return (
		<div className='o-page o-page_project'>
			<Section classes='-padding-top-lg -relative' noGutter>
				<Container sx={{".o-colorBlobs": {
					height: "500%"
				}}}>
					<Typography variant='h1' component='h1' textAlign="center">
						Projects
					</Typography>
					<ColorBlobs height="200%"/>
				</Container>
			</Section>
			<Section classes='-padding-bottom-lg -relative'>
				<Container maxWidth='0'>
					{/* <SearchBar /> */}
					<ProjectGrid2
						variant='projects'
						items={
							!search.currentResults ? data.projects : search.currentResults
						}
						hoverEffect={"frame"}
						colors={colors}
					/>
				</Container>
			</Section>
		</div>
	);
}
