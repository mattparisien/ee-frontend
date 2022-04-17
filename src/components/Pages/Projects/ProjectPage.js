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
			<Section classes='-padding-lg o-hero -relative' noGutter>
				<div className='o-hero_content -flex -flex-column -align-center -justify-center'>
					<Typography variant="h1" component="h1">
						Coming Soon
						</Typography>
				</div>

				<ColorBlobs />
			</Section>
			<Section classes='-padding-lg'>
				<Container maxWidth="0">
					{/* <SearchBar /> */}
					<ProjectGrid2
						variant='projects'
						items={!search.currentResults ? data.projects : search.currentResults}
						hoverEffect={"frame"}
						colors={colors}
					/>
				</Container>
			</Section>
		</div>
	);
}
