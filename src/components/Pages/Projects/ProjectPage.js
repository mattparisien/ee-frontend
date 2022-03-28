import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ProjectGrid from "./ProjectGrid";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../App";
import Fade from "react-reveal/Fade";

export default function ProjectPage({ transitioning, toggleTransitioning }) {
	const data = useContext(DataContext);

	return (
		<div className='o-page o-page_project'>
			<ContainerFluid classes='-bg-light'>
				<Section classes='-padding-lg'>
					<Fade bottom>
						<h2 className='o-h2'>Projects</h2>
					</Fade>
					<Fade bottom>
						<p className='o-h3'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
							dolorum perferendis quod recusandae. Magnam a in, architecto quis
							commodi autem. Dolorum itaque omnis eveniet doloribus placeat
							veritatis, blanditiis, voluptatum consectetur ipsam animi
							explicabo beatae ipsum, ratione cum. Porro inventore sequi dolorem
							aut eos iusto exercitationem esse dolores dicta. Error, commodi!
						</p>
					</Fade>
				</Section>
				<Section classes='-padding-lg'>
					<ProjectGrid variant='projects' items={data.posts} />
				</Section>
			</ContainerFluid>
		</div>
	);
}
