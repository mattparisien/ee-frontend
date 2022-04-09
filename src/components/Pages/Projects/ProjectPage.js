import { Typography } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";

export default function ProjectPage({ pageHeading }) {
	gsap.registerPlugin(DrawSVGPlugin);
	// const data = useContext(DataContext);
	// const { search } = useContext(SearchContext);

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
			{/* <Section classes='-padding-lg'>
				<ContainerFluid classes='-bg-light'>
					<SearchBar />
					<ProjectGrid
						variant='projects'
						items={!search.currentResults ? data.posts : search.currentResults}
						hoverEffect={"frame"}
					/>
				</ContainerFluid>
			</Section> */}
		</div>
	);
}
