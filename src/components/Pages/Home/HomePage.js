import React from "react";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import { useContext } from "react";
import { DataContext } from "../../../App";
import ProjectGrid from "../Projects/ProjectGrid";

function HomePage() {
	const data = useContext(DataContext);

	return (
		<>
			<div className='o-page o-page_home'>
				<ContainerFluid classes='-stretchY'>
					<p className='o-text -text-big'>{data.about && data.about.body1}</p>
				</ContainerFluid>
				<ContainerFluid classes='-bg-light'>
					<Section classes='-padding-lg'>
						<div className='c-steps'>
							{data &&
								data.steps &&
								data.steps.map((step, i) => {
									return (
										<div className='c-steps_item' key={i}>
											<h3 className='o-h3'>{step.title}</h3>
											<p className='o-text'>{step.body}</p>
										</div>
									);
								})}
						</div>
					</Section>
					<Section classes='-padding-lg'>
						{/* First option */}
						<ProjectGrid items={data && data.posts && data.posts.slice(0, 4)} />
						{/* Section option */}
					</Section>
				</ContainerFluid>
			</div>
		</>
	);
}

export default HomePage;
