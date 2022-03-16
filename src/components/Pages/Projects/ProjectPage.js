import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ProjectGrid from "./ProjectGrid";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Containers/Temp/Authenticated";

export default function ProjectPage() {
	const data = useContext(DataContext);

	return (
		<div className='o-page o-page_project'>
			<ContainerFluid classes='-bg-light'>
				<Section>
					<h2 className='o-h2'>Projects</h2>
				</Section>
				<Section>
					<ProjectGrid items={data.posts} />
				</Section>
			</ContainerFluid>
		</div>
	);
}