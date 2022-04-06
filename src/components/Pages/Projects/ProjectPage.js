import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import { useContext, useEffect } from "react";
import { DataContext, SearchContext } from "../../../context/Context";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import ProjectGrid from "./ProjectGrid";
import SearchBar from "../../Search/SearchBar";

export default function ProjectPage() {
	gsap.registerPlugin(DrawSVGPlugin);
	const data = useContext(DataContext);
	const { search } = useContext(SearchContext);

	return (
		<div className='o-page o-page_project'>
			<Section classes='-padding-lg o-hero -relative'>
				<div className='o-hero_content -flex -flex-column -align-center -justify-center'>
					<h2
						className='o-h1 -split -fadeUpChars'
						data-scroll
						data-scroll-speed={2}
					>
						Projects
					</h2>
				</div>

				<ColorBlobs />
			</Section>
			<Section classes='-padding-lg'>
				<ContainerFluid classes='-bg-light'>
					<SearchBar />
					<ProjectGrid
						variant='projects'
						items={!search.currentResults ? data.posts : search.currentResults}
						hoverEffect={"frame"}
					/>
				</ContainerFluid>
			</Section>
		</div>
	);
}
