import { Typography } from "@mui/material";
import gsap from "gsap";
import { useContext } from "react";
import { DataContext, SearchContext } from "../../../context/Context";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import Container from "../../Containers/ContainerFluid";
import ProjectGrid from "./ProjectGrid";
import SearchBar from "../../Search/SearchBar";

export default function ProjectPage({ pageHeading }) {
	gsap.registerPlugin(DrawSVGPlugin);
	const data = useContext(DataContext);
	const { search } = useContext(SearchContext);

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
				<Container classes='-bg-light'>
					{/* <SearchBar /> */}
					<ProjectGrid
						variant='projects'
						items={!search.currentResults ? data.projects : search.currentResults}
						hoverEffect={"frame"}
					/>
				</Container>
			</Section>
		</div>
	);
}
